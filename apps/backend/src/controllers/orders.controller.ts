import { STATUS_CODE } from '@e-shop/utils';
import { Order, Product } from '@e-shop/database/models';

import type { Response } from 'express';
import type { Controller } from '@e-shop/types';
import type { CreateResponseBody } from '@e-shop/types/response';
import type { OrderPostRequestBody } from '@e-shop/types/request';

export default {
  /**
   * This action registers a new order before payment is made
   *
   * @route POST /api/v1/orders/register
   * @access Public/Private
   */
  async register(request, response: Response<CreateResponseBody>) {
    const { body: orderBody }: { body: OrderPostRequestBody } = request;
    // TODO use transactions

    // TODO validate product prices and maximum quantity of the order.

    // TODO validate that product exist in database.

    const order = await Order.register({
      // TODO add this property when register featured will be added
      customer: undefined,
      contact: orderBody.contact,
      products: orderBody.products,
      shippingAddress: orderBody.shippingAddress,
      paymentMethod: orderBody.paymentMethod,
      customerNote: orderBody.customerNote,
    });

    await Product.updateStockByOrder(orderBody);

    // TODO (in future) send e-mail do client

    response.status(STATUS_CODE.CREATED).send({
      message: `This action created a new order and update products stocks`,
      status: STATUS_CODE.CREATED,
      data: {
        order,
      },
    });
  },
} satisfies Controller;
