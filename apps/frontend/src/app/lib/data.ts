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

    const dataProducts = await fetch(
      `http://localhost:3333/api/v1/products?${queryString}`
    );

    return await dataProducts.json();
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch featured products data.');
  }
}
