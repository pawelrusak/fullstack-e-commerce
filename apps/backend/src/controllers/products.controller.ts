import { Controller } from '@e-shop/types';
import { Product } from '@e-shop/database/models';
import { Product as TProduct } from '@e-shop/types';

const STATUS_CODE = Object.freeze({
  OK: 200,
  NOT_IMPLEMENTED: 501,
});

export default {
  /**
   * This action returns all products
   *
   * @route GET /api/v1/products
   * @access Public
   */
  async findAll(_, response) {
    const products = await Product.find(response.locals.query)
      .populate({
        path: 'subCategory',
        populate: { path: 'category' },
      })
      .sort(response.locals.sort);

    response.status(STATUS_CODE.OK).send(products);
  },

  /**
   * This action returns all products by category and subCategory
   *
   * @todo refactor this action to use findAll
   * @deprecated this is a temporary solution, and will be replaced by findAll
   * @example ```http
   * GET /api/v1/products/by-categories?subCategory.category.name=Cameras%20%26%20Camcorders
   *
   * GET /api/v1/products/by-categories?subCategory.name=Camera&limit=5
   * ```
   * @route GET /api/v1/products/category
   * @access Public
   */
  async findAllByCategoryAndSubCategory(request, response) {
    const query = request.query;

    const queryEntires = Object.entries(query).map(([key, value]) => {
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

    const newQuery = Object.fromEntries(queryEntires);

    const limit = parseInt(newQuery.limit, 10) || 10;

    const products = await Product.aggregate<TProduct>([
      {
        $lookup: {
          from: 'subcategories',
          localField: 'subCategory',
          foreignField: '_id',
          as: '_subCategory',
        },
      },
      { $unwind: '$_subCategory' },
      {
        $lookup: {
          from: 'categories',
          localField: '_subCategory.category',
          foreignField: '_id',
          as: '_subCategory._category',
        },
      },
      { $unwind: '$_subCategory._category' },

      {
        $match: newQuery,
      },
      {
        $addFields: {
          subCategory: {
            _id: '$_subCategory._id',
            name: '$_subCategory.name',
            category: {
              _id: '$_subCategory._category._id',
              name: '$_subCategory._category.name',
            },
          },
        },
      },
      {
        $project: {
          _subCategory: 0,
        },
      },
    ]).limit(limit);

    response.status(STATUS_CODE.OK).send(products);
  },

  /**
   * This action returns a product by slug
   *
   * @route GET /api/v1/products/:slug
   * @access Public
   */
  async findOne(request, response) {
    const slug = request.params.slug;

    const product = await Product.findOne({ slug })
      .populate({
        path: 'subCategory',
        populate: { path: 'category' },
      })
      .orFail();

    response.status(STATUS_CODE.OK).send(product);
  },

  /**
   * This action create a new product
   *
   * @route POST /api/v1/products
   * @access Private/Admin
   */
  async create(_, response) {
    response
      .status(STATUS_CODE.NOT_IMPLEMENTED)
      .send({ message: 'This action create a new product' });
  },

  /**
   * This action updates a product by slug
   *
   * @route PUT /api/v1/products/:slug
   * @access Private/Admin
   */
  async update(request, response) {
    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: `This action updates a #${request.params.slug} product`,
    });
  },

  /**
   * This action removes a product by slug
   *
   * @route DELETE /api/v1/products/:slug
   * @access Private/Admin
   */
  async remove(request, response) {
    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: `This action removes a #${request.params.slug} product`,
    });
  },
} satisfies Controller;
