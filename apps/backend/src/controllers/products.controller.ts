import { Controller } from '@e-shop/types';

const HTTP_STATUS_CODE = Object.freeze({
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
    response
      .status(HTTP_STATUS_CODE.NOT_IMPLEMENTED)
      .send({ message: 'This action returns all products' });
  },

  /**
   * This action returns a product by slug
   *
   * @route GET /api/v1/products/:slug
   * @access Public
   */
  async findOne(request, response) {
    response.status(HTTP_STATUS_CODE.NOT_IMPLEMENTED).send({
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
      .status(HTTP_STATUS_CODE.NOT_IMPLEMENTED)
      .send({ message: 'This action create a new product' });
  },

  /**
   * This action updates a product by slug
   *
   * @route PUT /api/v1/products/:slug
   * @access Private/Admin
   */
  async update(request, response) {
    response.status(HTTP_STATUS_CODE.NOT_IMPLEMENTED).send({
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
    response.status(HTTP_STATUS_CODE.NOT_IMPLEMENTED).send({
      message: `This action removes a #${request.params.slug} product`,
    });
  },
} satisfies Controller;
