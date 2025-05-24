import type { Modify, SubCategory } from '@e-shop/types';

/**
 * MongoDB ObjectId (as a string) that references the parent
 * Category document. Stored as a plain string to keep the
 * seeder types lightweight and database-agnostic.
 */
type CategoryId = string;

/**
 * Subcategory type for seeding, using a string ID for "category" instead of a full object.
 */
export type SeederSubCategory = Modify<
  SubCategory,
  {
    category: CategoryId;
  }
>;
