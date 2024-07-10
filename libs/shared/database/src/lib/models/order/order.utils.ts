import type { OrderProduct, Modify } from '@e-shop/types';

export function getOrderProductsIds(orderProducts: OrderProduct[]) {
  return orderProducts.map((product) => product.product._id);
}

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
