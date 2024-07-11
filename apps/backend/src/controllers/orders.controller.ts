import { Controller } from '@e-shop/types';
import { Order } from '@e-shop/database/models';
import { STATUS_CODE } from '@e-shop/utils';
import { OrderPostRequestBody } from '@e-shop/types/request';

export default {
  /**
   * This action registers a new order before payment is made
   *
   * @route POST /api/v1/orders/register
   * @access Public
   */
  async register(request, response) {
    const { body }: { body: OrderPostRequestBody } = request;
    // TODO use transactions

    // TODO validate product prices and maximum quantity of the order.

    // TODO validate that product exist in database.

    await Order.register({
      // TODO add this property when register featured will be added
      customer: undefined,
      contact: body.contact,
      products: body.products,
      shippingAddress: body.shippingAddress,
      paymentMethod: body.paymentMethod,
      customerNote: body.customerNote,
    });

    // TODO update product stocks

    response.status(STATUS_CODE.CREATED).send({
      message: `This action created a new order and update product stock`,
    });
  },
} satisfies Controller;
