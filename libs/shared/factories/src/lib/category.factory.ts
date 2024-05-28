import { faker } from '@faker-js/faker';
import { Category } from '@e-shop/types';

export function categoryFactory(): Category {
  return {
    _id: faker.string.uuid(),
    name: faker.lorem.word(),
    slug: faker.lorem.slug(),
  };
}
