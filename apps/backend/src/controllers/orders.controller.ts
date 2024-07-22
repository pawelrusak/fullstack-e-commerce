import { STATUS_CODE } from '@e-shop/utils';
import { Order, Product } from '@e-shop/database/models';
import { runInTransaction } from '@e-shop/database/utils';

import type { Response } from 'express';
import type { Controller } from '@e-shop/types';
import type { CreateResponseBody } from '@e-shop/types/response';
import type { OrderPostRequestBody } from '@e-shop/types/request';

export default {
  /**
   * This action registers a new order before payment is made
   *
   * @route POST /api/v1/orders/register
   * @request {@link ../middlewares/validations/orders.ts}
   * @access Public/Private
   */
  async register(request, response: Response<CreateResponseBody>) {
    await runInTransaction(async (session) => {
      const { body: orderBody }: { body: OrderPostRequestBody } = request;
      // TODO use transactions

      const order = await Order.register(
        {
          // TODO add this property when register featured will be added
          customer: undefined,
          contact: orderBody.contact,
          products: orderBody.products,
          shippingAddress: orderBody.shippingAddress,
          paymentMethod: orderBody.paymentMethod,
          customerNote: orderBody.customerNote,
        },
        { session },
      );

      await Product.updateStockByOrder(orderBody, { session });

      // TODO (in future) send e-mail do client

      response.status(STATUS_CODE.CREATED).send({
        message: `This action created a new order and update products stocks`,
        status: STATUS_CODE.CREATED,
        data: {
          order,
        },
      });
    });
  },
} satisfies Controller;
