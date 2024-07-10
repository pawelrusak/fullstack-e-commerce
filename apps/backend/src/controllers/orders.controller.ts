import { Controller } from '@e-shop/types';
import { STATUS_CODE } from '@e-shop/utils';

export default {
  /**
   * This action registers a new order before payment is made
   *
   * @route POST /api/v1/orders/register
   * @access Public
   */
  async register(request, response) {
    // TODO use transactions

    // TODO validate product prices and maximum quantity of the order.

    // TODO validate that product exist in database.

    // TODO register (create) a new order

    // TODO update product stocks

    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: `This action created a new order and update product stock`,
    });
  },
} satisfies Controller;
