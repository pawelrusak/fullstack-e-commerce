import { z } from 'zod';
import { productBaseSchema } from '@e-shop/validations';

function getFilterSchema() {
  /**
   * @todo Create this schema to be more dynamic. To by build from mongoose Product model
   */
  const subCategoryDotSchema = z.object({
    'subCategory.category.name': z.string(),
    'subCategory.category.slug': z.string(),
    'subCategory.name': z.string(),
    'subCategory.slug': z.string(),
  });

  return productBaseSchema
    .omit({ subCategory: true })
    .merge(subCategoryDotSchema)
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
