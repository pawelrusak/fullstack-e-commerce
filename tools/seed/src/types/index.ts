import type { Product, Modify, SubCategory } from '@e-shop/types';
export type { SeederCategory } from './category.types';

/**
 * The base product type used when seeding product data.
 * Typically this comes from the main `Product` schema.
 */
export type BaseSeederProduct = Product;

/**
 * Represents a single specification or attribute of a product.
 */
export type ProductSpecification = {
  /**
   * The name of the product attribute, e.g. "Brand", "Display", "Battery", "Dimensions".
   */
  label: string;

  /**
   * The detailed description or value of the specification.
   */
  value: string;

  /**
   * If true, this specification is shown next to the product image on the detail product page.
   */
  highlighted: boolean;
};

/**
 * Contains pricing details for a product, including both regular
 * and sale prices. Used to indicate discounts or promotional pricing.
 */
export type SalePrices = {
  /**
   * The original, non-discounted price of the product.
   */
  __regularPrice?: number;

  /**
   * The discounted sale price of the product, if applicable.
   * A `null` value indicates that the product is not currently on sale.
   */
  __salePrice?: null | number;
};

/**
 * Defines delivery options for a product.
 */
export type Delivery = {
  /**
   * An array of delivery types associated with the product.
   *
   * Examples include "Worldwide", "EU", "United Kingdom", etc.
   * Used to define where the product can be delivered.
   */
  __delivery?: string[];
};

/**
 * Represents the number of reviews a product has received.
 */
export type ReviewCount = {
  /**
   * The number of reviews associated with the product.
   */
  __reviewCount?: number;
};

/**
 * Includes optional product specifications like brand, display, or battery.
 */
export type Specification = {
  /**
   * An array of detailed product specifications.
   */
  __specification?: ProductSpecification[];
};

/**
 * Additional product metadata used specifically for seeding purposes.
 */
export type ProductSeederAdditional = SalePrices &
  ReviewCount &
  Delivery &
  Specification;

/**
 * Full product seed type combining base product data with additional fields.
 */
export type SeederProduct = BaseSeederProduct & ProductSeederAdditional;

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
