import type { Id } from './shared';
import type { Product } from './product';

/**
 * Defines a brand entity in the shop's product catalog.
 */
export type Brand = Id & {
  name: Product['brand'];
  // TODO: Rename this to `productCount` or something similar
  count: number;
};
