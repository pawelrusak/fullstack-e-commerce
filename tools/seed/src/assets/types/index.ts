import { Product } from '@e-shop/types';

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
