import { productFactory } from '../lib/product.factory';

describe('productFactory', () => {
  it('should return a product with specified shape', () => {
    const product = productFactory();

    expect(product).toEqual({
      _id: expect.any(String),
      name: expect.any(String),
      description: expect.any(String),
      slug: expect.any(String),
      brand: expect.any(String),
      price: expect.any(Number),
      stock: expect.any(Number),
      thumbnail: expect.any(String),
      images: expect.any(Array),
      size: {
        width: expect.any(Number),
        height: expect.any(Number),
        depth: expect.any(Number),
      },
      subCategory: {
        _id: expect.any(String),
        name: expect.any(String),
        slug: expect.any(String),
        category: {
          _id: expect.any(String),
          name: expect.any(String),
          slug: expect.any(String),
        },
      },
      isFeatured: expect.any(Boolean),
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });

  it('should return a product with array of two images', () => {
    const product = productFactory();

    expect(product.images.length).toBe(2);

    expect(product.images[0]).toEqual(expect.any(String));
    expect(product.images[1]).toEqual(expect.any(String));
  });
});
