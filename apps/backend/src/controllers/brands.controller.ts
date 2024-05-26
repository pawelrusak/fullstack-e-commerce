import { Controller } from '@e-shop/types';
import { Product } from '@e-shop/database/models';
import { STATUS_CODE } from '@e-shop/utils';

export default {
  /**
   * This action returns all brands
   *
   * @route GET /api/v1/brands
   * @access Public
   */
  async findAll(_, response) {
    const brands = await Product.findAllBrandsAndCount().sort({ count: -1 });

    response.status(STATUS_CODE.OK).send(brands);
  },
} satisfies Controller;
