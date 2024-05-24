import qs from 'qs';
import { unstable_noStore as noStore } from 'next/cache';
import { Product, Category, Paths, Prettify } from '@e-shop/types';

export async function fetchFeaturedProducts(): Promise<Product[]> {
  /**
   * @todo improve cache management
   */
  noStore();

  try {
    const queryString = qs.stringify({
      isFeatured: true,
    } satisfies Partial<Product>);

    const data = await fetch(
      `http://localhost:3333/api/v1/products?${queryString}`
    );

    return await data.json();
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch featured products data.');
  }
}

export async function fetchProductDetails(
  slug: Product['slug']
): Promise<Product> {
  /**
   * @todo improve cache management
   */
  noStore();

  try {
    const data = await fetch(`http://localhost:3333/api/v1/products/${slug}`);

    return await data.json();
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch product details data.');
  }
}

export async function fetchProductsByCategory(
  categorySlug: Required<Product['subCategory']>['slug'],
  limit = 6
): Promise<Product[]> {
  /**
   * @todo improve cache management
   */
  noStore();

  type ProductQueryStringFields = Paths<Product>;
  type LimitQueryStringField = { limit: number };

  type AllQueryStrings = Prettify<
    Record<ProductQueryStringFields, string> & LimitQueryStringField
  >;

  type QueryString = Partial<AllQueryStrings>;

  try {
    const queryString = qs.stringify({
      'subCategory.category.slug': categorySlug,
      limit,
    } satisfies QueryString);

    const data = await fetch(
      `http://localhost:3333/api/v1/products?${queryString}`
    );

    return await data.json();
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch products by category data.');
  }
}

export async function fetchRelatedProductsAndSubCategorySlug(
  slug: Product['slug']
): Promise<{ products: Product[]; categorySlug: Category['slug'] }> {
  /**
   * @todo improve cache management
   */
  noStore();

  try {
    const productDetails = await fetchProductDetails(slug);

    const categorySlug = productDetails.subCategory.category.slug;

    const relatedProducts = await fetchProductsByCategory(categorySlug || '');

    const relatedProductWithoutRepetition = relatedProducts.filter(
      (relatedProduct) => relatedProduct.slug !== slug
    );

    const products =
      relatedProductWithoutRepetition.length > 5
        ? relatedProductWithoutRepetition.slice(0, 5)
        : relatedProductWithoutRepetition;

    return { products, categorySlug };
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch related products data.');
  }
}

type ProductFilters = Partial<Record<Paths<Product>, string>>;

export async function fetchProductsByFilters(
  productFilters?: ProductFilters
): Promise<Product[]> {
  /**
   * @todo improve cache management
   */
  noStore();

  try {
    const queryString = qs.stringify(productFilters);

    const data = await fetch(
      `http://localhost:3333/api/v1/products?${queryString}`
    );

    return await data.json();
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch products by filters data.');
  }
}
