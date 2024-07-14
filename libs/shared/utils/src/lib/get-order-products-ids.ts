import type { OrderProduct } from '@e-shop/types';

export function getOrderProductsIds(orderProducts: OrderProduct[]) {
  return orderProducts.map((product) => product.product._id);
}
