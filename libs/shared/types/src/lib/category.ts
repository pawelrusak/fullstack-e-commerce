import type { Id } from './shared';

export type Category = Id & {
  name: string;
};

export type SubCategory = Category & {
  /**
   * The category to which the sub-category belongs.
   */
  category: Category;
};
