import { z } from 'zod';
import { productBaseSchema } from '@e-shop/validations';
import { Paths, Product } from '@e-shop/types';

type ProductPaths = Paths<Product>;

type FilterSchema = Partial<Record<ProductPaths, z.ZodString>>;

function getFilterSchema() {
  const filterNestedPaths = {
    'subCategory.name': z.string(),
    'subCategory.slug': z.string(),
    'subCategory.category.slug': z.string(),
    'subCategory.category.name': z.string(),
  } satisfies FilterSchema;

  const filterNestedPathsSchema = z.object(filterNestedPaths);

  return productBaseSchema
    .omit({ subCategory: true })
    .merge(filterNestedPathsSchema)
    .deepPartial();
}

export function renameFilterKeysRelatedToCategories(filter: unknown) {
  if (typeof filter === 'object' && filter !== null) {
    const filterEntires = Object.entries(filter).map(([key, value]) => {
      if (key.includes('subCategory.category.')) {
        key = key.replace('subCategory.category.', '_subCategory._category.');
        return [key, value];
      }

      if (key.includes('subCategory.')) {
        key = key.replace('subCategory.', '_subCategory.');
        return [key, value];
      }

      return [key, value];
    });

    return Object.fromEntries(filterEntires);
  }

  return {};
}

export function validateAndConvertFilterData(filterData: unknown) {
  try {
    return getFilterSchema().parse(filterData);
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));

    throw new TypeError('Invalid filter data');
  }
}
