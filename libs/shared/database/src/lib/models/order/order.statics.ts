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
  normalizeOrderShippingMethod,
} from './order.utils';

type RegisterOrderDocs = Prettify<
  Pick<
    TOrder,
    | 'customer'
    | 'contact'
    | 'products'
    | 'shippingAddress'
    | 'paymentMethod'
    | 'shippingMethod'
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
    options?: mongoose.SessionOption,
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
  options?: mongoose.SessionOption,
) {
  const uniqueProductIds = getOrderProductsKindCount(docs.products);

  const orderProducts = normalizeOrderProduct(docs.products);
  const orderProductTotalPrice = getOrderProductTotalPrice(docs.products);
  const orderProductsCount = getCountOfAllOrderProducts(docs.products);
  const orderShippingMethod = normalizeOrderShippingMethod(docs.shippingMethod);

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
    totalPrice:
      orderProductTotalPrice + (orderShippingMethod?.costAtTimeOfOrder || 0),
    productsCount: orderProductsCount,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    shippingMethod: orderShippingMethod,
    // TODO use setter for this
    customerNote:
      docs.customerNote?.trim() === '' ? undefined : docs.customerNote,
  };

  const order = await this.create([newOrder], options);

  return await this.findById(order[0]._id, null, options).exec();
}
