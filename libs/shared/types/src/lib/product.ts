import type { Id, Timestamp } from './shared';
import type { SubCategory, SubCategorySchema } from './category';
import type { Types } from 'mongoose';
import type { Modify, Prettify } from './utils';

/**
 * Represents the physical dimensions of a product.
 */
export type Size = {
  /**
   * Width of the product in appropriate units (e.g., centimeters or inches).
   */
  width: number;
  /**
   * Height of the product in appropriate units.
   */
  height: number;
  /**
   * Depth of the product in appropriate units.
   */
  depth: number;
};

/**
 * Represents a single product that can be purchased in the store.
 */
export type Product = Id &
  Timestamp & {
    /**
     *  Human‑readable product name displayed in listings and detail pages.
     */
    name: string;
    /**
     * Detailed description or marketing copy shown on the product detail page.
     */
    description: string;
    /**
     * SEO‑friendly slug derived from the product name.
     */
    slug?: string;
    /**
     *  Brand or manufacturer of the product.
     */
    brand: string;
    /**
     * Unit price in the smallest currency unit (e.g., cents).
     *
     * @example
     * `1999` // represents 19.99 in the storefront’s default currency
     */
    price: number;
    /**
     * Number of units currently available for purchase.
     */
    stock: number;
    /**
     *  URL of the primary product image.
     */
    thumbnail?: string;
    /**
     *  URLs of all images associated with the product.
     */
    images: string[];
    /**
     *  Physical dimensions of the product.
     */
    size: Size;
    /**
     * Leaf sub‑category that the product belongs to.
     */
    subCategory: SubCategory;
    /**
     * Indicates whether the product should be highlighted in “Featured” lists.
     */
    isFeatured: boolean;
  };

/**
 * A Mongoose-compatible version of {@link Product}.
 */
export type ProductSchema = Prettify<
  Modify<
    Product,
    {
      /**
       * Mongoose’s ObjectId replacement for the generic {@link Id._id} field.
       */
      _id: Types.ObjectId;
      /**
       * Embedded sub‑category document instead of the plain `SubCategory` type.
       */
      subCategory: Types.Subdocument<SubCategorySchema>;
      images: Types.Array<string>;
    }
  >
>;
