import { categoryFactory } from '../lib/category.factory';

describe('categoryFactory', () => {
  it('should return a category with specified shape', () => {
    const category = categoryFactory();
    expect(category).toEqual({
      _id: expect.any(String),
      name: expect.any(String),
      slug: expect.any(String),
    });
  });
});
