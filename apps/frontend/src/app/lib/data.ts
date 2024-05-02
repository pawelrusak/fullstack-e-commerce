import qs from 'qs';
import { unstable_noStore as noStore } from 'next/cache';
import { Product } from '@e-shop/types';

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
