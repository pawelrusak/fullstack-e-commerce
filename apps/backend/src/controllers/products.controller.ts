import { Controller } from '@e-shop/types';
import { Product } from '@e-shop/database/models';

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
   * This action returns a product by slug
   *
   * @route GET /api/v1/products/:slug
   * @access Public
   */
  async findOne(request, response) {
    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: `This action returns a #${request.params.slug} product`,
    });
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
