import type { Id, Timestamp } from './shared';
import type { SubCategory, SubCategorySchema } from './category';
import type { Types } from 'mongoose';
import type { Modify, Prettify } from './utils';

/**
 * Represents the physical dimensions of a product.
 */
export type Size = {
  /** Width of the product in appropriate units (e.g., centimeters or inches). */
  width: number;

  /** Height of the product in appropriate units. */
  height: number;

  /** Depth of the product in appropriate units. */
  depth: number;
};

export type Product = Id &
  Timestamp & {
    name: string;
    description: string;
    slug?: string;
    brand: string;
    price: number;
    stock: number;
    thumbnail?: string;
    images: string[];
    size: Size;
    subCategory: SubCategory;
    isFeatured: boolean;
  };

export type ProductSchema = Prettify<
  Modify<
    Product,
    {
      _id: Types.ObjectId;
      subCategory: Types.Subdocument<SubCategorySchema>;
      images: Types.Array<string>;
    }
  >
>;
