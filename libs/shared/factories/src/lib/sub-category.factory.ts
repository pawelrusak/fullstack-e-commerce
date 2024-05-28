import { faker } from '@faker-js/faker';
import { categoryFactory } from './category.factory';
import { SubCategory } from '@e-shop/types';

export function subCategoryFactory(): SubCategory {
  return {
    _id: faker.string.uuid(),
    name: faker.lorem.word(),
    slug: faker.lorem.slug(),
    category: categoryFactory(),
  };
}
