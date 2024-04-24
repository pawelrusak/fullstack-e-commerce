import type { Id } from './shared';
import type mongoose from 'mongoose';
import type { Modify, Prettify } from './utils';

export type Category = Id & {
  name: string;
};

export type SubCategory = Category & {
  /**
   * The category to which the sub-category belongs.
   */
  category: Category;
};

export type CategorySchema = Prettify<
  Modify<
    Category,
    {
      _id: mongoose.Types.ObjectId;
    }
  >
>;

export type SubCategorySchema = Prettify<
  CategorySchema & {
    /**
     * The category to which the sub-category belongs.
     */
    category: CategorySchema;
  }
>;
