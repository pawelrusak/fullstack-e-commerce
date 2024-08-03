import {
  getOrderProductsIds,
  InvalidObjectIdsError,
  RegisterOrderError,
  getCurrencyFormat,
} from '@e-shop/utils';
import { isValidObjectIds, getInvalidObjectIds } from '@e-shop/database/utils';
import { Product, ShippingMethod } from '@e-shop/database/models';

import type { Order, OrderProduct } from '@e-shop/types';
import type { Request, Response, NextFunction } from 'express';
import type { OrderPostRequestBody } from '@e-shop/types/request';

function assertOrderHasProducts(order: Partial<Order>) {
  if (order.products === undefined || order.products.length === 0) {
    throw new RegisterOrderError('The order must have at least one product.');
  }
}

async function assertProductsInDatabaseOrFail(productsIds: string[]) {
  const products = await Product.find({ _id: { $in: productsIds } });

  if (products.length !== productsIds.length) {
    const productsInDatabaseIds = products.map((product) =>
      product._id.toString(),
    );
    const missingProductsIds = productsIds.filter(
      (id) => !productsInDatabaseIds.includes(id),
    );

    throw new InvalidObjectIdsError(
      `The following products are not in the database: ${missingProductsIds.join(
        ', ',
      )}`,
    );
  }

  return true;
}

async function assertProductsIsNotEnoughAndPriceNotMatches(
  orderProducts: OrderProduct[],
) {
  const orderProductsId = getOrderProductsIds(orderProducts);

  const productsDB = await Product.find({ _id: { $in: orderProductsId } });

  productsDB.forEach((productBD) => {
    const productDBId = String(productBD._id);
    const productDBPrice = productBD.price;
    const productBDstock = productBD.stock;

    const orderProduct = orderProducts.find(
      (orderProduct) => orderProduct.product._id === productDBId,
    );

    if (orderProduct.currentProductPrice !== productDBPrice) {
      throw new RegisterOrderError(
        `Price mismatch for product ID ${productDBId}: The provided price does not match the price in the database. Your product price is ${getCurrencyFormat(
          orderProduct.currentProductPrice,
        )}, but this product costs ${getCurrencyFormat(productDBPrice)}`,
      );
    }

    if (orderProduct.quantity <= 0) {
      throw new RegisterOrderError(
        `Incorrect quantity in order for product with ID ${productDBId}, your order has ${orderProduct.quantity} products`,
      );
    }

    if (productBDstock <= orderProduct.quantity) {
      throw new RegisterOrderError(
        `Not enough product with ID ${productDBId}, there is only ${productBDstock} of this product in the stock, but you order ${orderProduct.quantity}`,
      );
    }
  });
}

async function assertOrderHasValidShippingMethod(orderBody: Partial<Order>) {
  if (!orderBody.shippingMethod) {
    throw new RegisterOrderError('The order must have a shippingMethod field.');
  }

  if (!orderBody.shippingMethod.method) {
    throw new RegisterOrderError(
      'The shipping method must have a method field. Please fix the value of the shippingMethod.method field.',
    );
  }

  if (orderBody.shippingMethod.method._id === undefined) {
    throw new RegisterOrderError(
      'The shipping method ID is missing. Please provide a valid shipping method ID.',
    );
  }

  if (!isValidObjectIds(orderBody.shippingMethod.method._id)) {
    throw new InvalidObjectIdsError(
      'The shipping method ID is invalid. Please provide a valid shipping method ID.',
    );
  }

  const shippingMethod = await ShippingMethod.findById(
    orderBody.shippingMethod.method._id,
  );

  if (shippingMethod._id.toString() !== orderBody.shippingMethod.method._id) {
    throw new RegisterOrderError(
      'The shipping method ID provided is not exist in database. Please provide a exist shipping method ID.',
    );
  }

  if (shippingMethod.cost !== orderBody.shippingMethod.costAtTimeOfOrder) {
    throw new RegisterOrderError(
      'The shipping method cost does not match the cost in the database. Please fix the value of the shippingMethod.costAtTimeOfOrder field.',
    );
  }
}

type ParamsDictionary = Record<string, string>;

export async function validateOrderProductsPriceAndStock(
  request?: Request<ParamsDictionary, unknown, OrderPostRequestBody>,
  response?: Response,
  next?: NextFunction,
) {
  const { body: orderBody } = request;

  assertOrderHasProducts(orderBody);

  // Validate order product to be valid MangoDB ObjectId (should reduce unnecessary database queries)
  const orderProductsId = getOrderProductsIds(orderBody.products);

  const hasValidIds = isValidObjectIds(...orderProductsId);

  if (!hasValidIds) {
    const invalidProductsIds = getInvalidObjectIds(...orderProductsId);

    throw new InvalidObjectIdsError(
      `The following products IDs are invalid: ${invalidProductsIds.join(
        ', ',
      )}`,
    );
  }

  // Validate that products exists in database
  await assertProductsInDatabaseOrFail(orderProductsId);

  // Validate that the price matches the database and ensure the purchased quantity does not exceed available stock
  await assertProductsIsNotEnoughAndPriceNotMatches(orderBody.products);

  // validate shipping method
  await assertOrderHasValidShippingMethod(orderBody);

  next();
}
