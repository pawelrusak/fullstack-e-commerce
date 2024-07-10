import mongoose from 'mongoose';
import {
  Order as TOrder,
  OrderSchema,
  ORDER_STATUS_CODE,
  OrderStatus,
  Prettify,
} from '@e-shop/types';
import {
  normalizeOrderProduct,
  getOrderProductsKindCount,
  getOrderProductTotalPrice,
  getCountOfAllOrderProducts,
} from './order.utils';

type RegisterOrderDocs = Prettify<
  Pick<
    TOrder,
    | 'customer'
    | 'contact'
    | 'products'
    | 'shippingAddress'
    | 'paymentMethod'
    | 'customerNote'
  >
>;

export type OrderRegister<
  TRawDocType = OrderSchema,
  // eslint-disable-next-line @typescript-eslint/ban-types
  TQueryHelpers = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  TInstanceMethods = {},
  // eslint-disable-next-line @typescript-eslint/ban-types
  TVirtuals = {},
> = {
  /**
   * Register (create) new order in database. This method prepare and fill others order field.
   */
  register(
    docs: RegisterOrderDocs,
  ): ReturnType<
    mongoose.Model<
      TRawDocType,
      TQueryHelpers,
      TInstanceMethods,
      TVirtuals
    >['create']
  >;
};

export async function register(
  this: mongoose.Model<OrderSchema>,
  docs: TOrder,
) {
  const uniqueProductIds = getOrderProductsKindCount(docs.products);

  const orderProducts = normalizeOrderProduct(docs.products);
  const orderProductTotalPrice = getOrderProductTotalPrice(docs.products);
  const orderProductsCount = getCountOfAllOrderProducts(docs.products);

  const PENDING_ORDER_STATUS: OrderStatus = 'pending';

  const newOrder: Partial<TOrder> = {
    contact: docs.contact,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    products: orderProducts,
    shippingAddress: docs.shippingAddress,
    paymentMethod: docs.paymentMethod,
    status: PENDING_ORDER_STATUS,
    statusCode: ORDER_STATUS_CODE[PENDING_ORDER_STATUS],
    productsKindCount: uniqueProductIds,
    totalPrice: orderProductTotalPrice,
    productsCount: orderProductsCount,
    customerNote:
      docs.customerNote?.trim() === '' ? undefined : docs.customerNote,
  };

  const order = await this.create(newOrder);

  return await this.findById(order._id).exec();
}
