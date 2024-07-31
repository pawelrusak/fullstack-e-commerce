import type {
  OrderProduct,
  Modify,
  Prettify,
  OrderShippingMethod,
} from '@e-shop/types';
import { getOrderProductsIds } from '@e-shop/utils';

type NormalizedOrderProduct = Modify<
  OrderProduct,
  {
    product: string;
  }
>;

export function normalizeOrderProduct(orderProducts: OrderProduct[]) {
  const normalizedOrderProduct: NormalizedOrderProduct[] = orderProducts.map(
    (orderProduct) => ({
      product: orderProduct.product._id,
      quantity: orderProduct.quantity,
      currentProductPrice: orderProduct.currentProductPrice,
      productsTotalPrice: orderProduct.productsTotalPrice,
    }),
  );

  return normalizedOrderProduct;
}

// TODO remove required when remove optional property
type BaseShippingMethod = Pick<Required<OrderShippingMethod>['method'], '_id'>;

export type BaseOrderShippingMethod = Prettify<
  Modify<
    OrderShippingMethod,
    {
      method?: BaseShippingMethod;
    }
  >
>;

type NormalizedOrderShippingMethod = Prettify<
  Modify<
    OrderShippingMethod,
    {
      method?: string;
    }
  >
>;

export function normalizeOrderShippingMethod(
  orderShippingMethod?: BaseOrderShippingMethod,
) {
  if (orderShippingMethod === undefined) {
    return undefined;
  }

  const normalizedOrderShippingMethod: NormalizedOrderShippingMethod = {
    method: orderShippingMethod?.method?._id,
    costAtTimeOfOrder: orderShippingMethod.costAtTimeOfOrder,
  };

  return normalizedOrderShippingMethod;
}

export function getOrderProductTotalPrice(orderProducts: OrderProduct[]) {
  return orderProducts.reduce((acc, orderProduct) => {
    return acc + orderProduct.quantity * orderProduct.currentProductPrice;
  }, 0);
}

export function getCountOfAllOrderProducts(orderProducts: OrderProduct[]) {
  return orderProducts.reduce((acc, orderProduct) => {
    return acc + orderProduct.quantity;
  }, 0);
}

export function getOrderProductsKindCount(orderProducts: OrderProduct[]) {
  const orderProductsIds = getOrderProductsIds(orderProducts);

  return [...new Set(orderProductsIds)].length;
}
