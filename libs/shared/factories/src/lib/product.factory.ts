import { faker } from '@faker-js/faker';
import { subCategoryFactory } from './sub-category.factory';
import { Product, Size } from '@e-shop/types';

function factorySize(): Size {
  return {
    width: faker.number.float({ multipleOf: 0.1, min: 0, max: 100 }),
    height: faker.number.float({ multipleOf: 0.1, min: 0, max: 100 }),
    depth: faker.number.float({ multipleOf: 0.1, min: 0, max: 100 }),
  };
}

export function productFactory(): Product {
  return {
    _id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.number.float({ multipleOf: 0.1, min: 0, max: 1000 }),
    description: faker.commerce.productDescription(),
    subCategory: subCategoryFactory(),
    brand: faker.company.name(),
    thumbnail: faker.image.url(),
    images: [faker.image.url(), faker.image.url()],
    slug: faker.lorem.slug(),
    stock: faker.number.int({ min: 0, max: 100 }),
    isFeatured: faker.datatype.boolean(),
    size: factorySize(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };
}
