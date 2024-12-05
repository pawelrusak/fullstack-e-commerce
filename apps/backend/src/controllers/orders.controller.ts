import { STATUS_CODE } from '@e-shop/utils';
import { Order, Product } from '@e-shop/database/models';
import { runInTransaction } from '@e-shop/database/utils';

import type { Response } from 'express';
import type { Controller } from '@e-shop/types';
import type {
  CreateResponseBody,
  InformationResponseBody,
} from '@e-shop/types/response';
import type { OrderPostRequestBody } from '@e-shop/types/request';

export default {
  /**
   * This action returns a orders by id
   *
   * @route GET /api/v1/orders/:slug
   * @access Private/Admin
   */
  async findOne(request, response: Response<InformationResponseBody>) {
    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: `This action returns a order #${request.params.id}`,
      status: STATUS_CODE.NOT_IMPLEMENTED,
    });
  },

  /**
   * This action returns all orders
   *
   * @route GET /api/v1/orders
   * @access Private/Admin
   */
  async findAll(_, response: Response<InformationResponseBody>) {
    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: 'This action returns all orders',
      status: STATUS_CODE.NOT_IMPLEMENTED,
    });
  },

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

      const order = await Order.register(
        {
          // TODO add this property when register featured will be added
          customer: undefined,
          contact: orderBody.contact,
          products: orderBody.products,
          shippingAddress: orderBody.shippingAddress,
          shippingMethod: orderBody.shippingMethod,
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

  /**
   * This action registers the payment for an order.
   *  * It processes the payment information and updates the order status accordingly.
   *
   * @route POST /api/v1/orders/:id/pay
   * @access Public/Private
   */
  async pay(_, response: Response<InformationResponseBody>) {
    response.status(STATUS_CODE.NOT_IMPLEMENTED).send({
      message: 'Payment processing is not implemented yet',
      status: STATUS_CODE.NOT_IMPLEMENTED,
    });
  },
} satisfies Controller;
