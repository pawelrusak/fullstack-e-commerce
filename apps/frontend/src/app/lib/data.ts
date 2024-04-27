import { Product } from '@e-shop/types';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchFeaturedProducts(): Promise<Product[]> {
  /**
   * @todo improve cache management
   */
  noStore();

  try {
    const dataProducts = await fetch('http://localhost:3333/api/v1/products');

    const products: Product[] = await dataProducts.json();

    /**
     * @todo remove this after implementing filters on the corresponding backend endpoint
     */
    const featuredProducts = products.filter((product) => product.isFeatured);

    return featuredProducts;
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
