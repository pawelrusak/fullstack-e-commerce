import { subCategoryFactory } from '../lib/sub-category.factory';

describe('subCategoryFactory', () => {
  it('should return a sub category with specified shape', () => {
    const subCategory = subCategoryFactory();
    expect(subCategory).toEqual({
      _id: expect.any(String),
      name: expect.any(String),
      slug: expect.any(String),
      category: {
        _id: expect.any(String),
        name: expect.any(String),
        slug: expect.any(String),
      },
    });
  });
});
