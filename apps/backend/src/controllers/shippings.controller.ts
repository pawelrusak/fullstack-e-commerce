import { STATUS_CODE } from '@e-shop/utils';
import { ShippingMethod } from '@e-shop/database/models';

import type { Response } from 'express';
import type { Controller } from '@e-shop/types';
import type { FindAllResponseBody } from '@e-shop/types/response';

export default {
  /**
   * This action returns all shipping methods
   *
   * @route GET /api/v1/shippings
   * @access Public
   */
  async findAll(_, response: Response<FindAllResponseBody>) {
    const shippingMethods = await ShippingMethod.find();

    response.status(STATUS_CODE.OK).send({
      data: shippingMethods,
      status: STATUS_CODE.OK,
    });
  },
} satisfies Controller;
