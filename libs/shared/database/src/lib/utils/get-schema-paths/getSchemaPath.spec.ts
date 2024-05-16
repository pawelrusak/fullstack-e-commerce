import { getSchemaPaths } from './getSchemaPath.utils';
import { Product } from '../../../models';

describe('getSchemaPaths', () => {
  it('should return an array of paths with referenced documents paths', () => {
    const paths = getSchemaPaths(Product.schema);

    // This test needs to be refreshed after changing the keys of the product model schema and his referenced model schema
    expect(paths).toMatchInlineSnapshot(`
      [
        "name",
        "description",
        "slug",
        "brand",
        "price",
        "stock",
        "thumbnail",
        "images",
        "size.width",
        "size.height",
        "size.depth",
        "subCategory.name",
        "subCategory.slug",
        "subCategory.category.name",
        "subCategory.category.slug",
        "subCategory.category._id",
        "subCategory._id",
        "isFeatured",
        "_id",
        "createdAt",
        "updatedAt",
      ]
    `);
  });
});
