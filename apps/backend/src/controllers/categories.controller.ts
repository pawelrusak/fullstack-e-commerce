import { Controller } from '@e-shop/types';
import { Category } from '@e-shop/database/models';
import { STATUS_CODE } from '@e-shop/utils';

export default {
  /**
   * This action returns all categories
   *
   * @route GET /api/v1/categories
   * @access Public
   */
  async findAll(_, response) {
    const categories = await Category.find();

    response.status(STATUS_CODE.OK).send(categories);
  },
} satisfies Controller;
