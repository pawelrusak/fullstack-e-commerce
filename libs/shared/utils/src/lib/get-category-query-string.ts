import * as qs from 'qs';
import { Product, Paths, Category } from '@e-shop/types';

export function getCategoryQueryString(categorySlug: Category['slug']) {
  type ProductQueryStringFields = Paths<Product>;

  type QueryString = Partial<Record<ProductQueryStringFields, string>>;

  const queryString = qs.stringify({
    'subCategory.category.slug': categorySlug,
  } satisfies QueryString);

  return queryString;
}
