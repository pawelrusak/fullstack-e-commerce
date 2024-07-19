import { getOrderProductsIds, InvalidObjectIdsError } from '@e-shop/utils';
import { isValidObjectIds, getInvalidObjectIds } from '@e-shop/database/utils';
import { Product } from '@e-shop/database/models';

import type { Request, Response, NextFunction } from 'express';
import type { OrderPostRequestBody } from '@e-shop/types/request';

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

type ParamsDictionary = Record<string, string>;

// getOrderProductsIds
export async function validateOrderProductsPriceAndStock(
  request?: Request<ParamsDictionary, unknown, OrderPostRequestBody>,
  response?: Response,
  next?: NextFunction,
) {
  const { body: orderBody } = request;

  // Validate order product to be valid MangoDB ObjectId (should reduce unnecessary database queries)
  const orderProductsId = getOrderProductsIds(orderBody.products);

  const hasValidIds = isValidObjectIds(...orderProductsId);

  if (!hasValidIds) {
    const invalidProductsIds = getInvalidObjectIds(...orderProductsId);

    throw new InvalidObjectIdsError(
      `The following products IDs are invalid: ${invalidProductsIds.join(', ')}`,
    );
  }

  // Validate that products exists in database
  await assertProductsInDatabaseOrFail(orderProductsId);

  // TODO validate that price is this same as in database

  // TODO validate that whether more products have been purchased than are in the database

  next();
}
