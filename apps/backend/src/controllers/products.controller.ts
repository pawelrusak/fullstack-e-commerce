import { Controller } from '@e-shop/types';
import { STATUS_CODE } from '@e-shop/utils';
import { Product } from '@e-shop/database/models';

export default {
  /**
   * This action returns all products
   *
   * @route GET /api/v1/products
   * @example
   * ```javascript
   * GET /api/v1/products/by-categories?subCategory.category.slug=audio-headphones
   *
   * GET /api/v1/products/by-categories?subCategory.name=camera&limit=5
   * ```
   * @access Public
   */
  async findAll(_, response) {
    // @todo use repository pattern?
    const products = await Product.findAllWithCategories(response.locals.query)
      .sort(response.locals.sort)
      .limit(response.locals.limit);

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
