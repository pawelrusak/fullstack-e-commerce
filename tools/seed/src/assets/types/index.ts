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
