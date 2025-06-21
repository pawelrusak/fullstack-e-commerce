import type { Id } from './shared';
import type mongoose from 'mongoose';
import type { Modify, Prettify } from './utils';

/**
 * Top-level category of products in the shop.
 */
export type Category = Id & {
  name: string;
  slug?: string;
};

export type SubCategory = Category & {
  /**
   * The category to which the sub-category belongs.
   */
  category: Category;
};

/**
 * A Mongoose-compatible version of {@link Category}.
 */
export type CategorySchema = Prettify<
  Modify<
    Category,
    {
      _id: mongoose.Types.ObjectId;
    }
  >
>;

/**
 * A Mongoose-compatible version of {@link SubCategory}.
 */
export type SubCategorySchema = Prettify<
  CategorySchema & {
    /**
     * The category to which the sub-category belongs.
     */
    category: CategorySchema;
  }
>;
