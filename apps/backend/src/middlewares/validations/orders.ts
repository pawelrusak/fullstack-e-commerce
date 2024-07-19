import { getOrderProductsIds, InvalidObjectIdsError } from '@e-shop/utils';
import { isValidObjectIds, getInvalidObjectIds } from '@e-shop/database/utils';

import type { Request, Response, NextFunction } from 'express';
import type { OrderPostRequestBody } from '@e-shop/types/request';

type ParamsDictionary = Record<string, string>;

// getOrderProductsIds
export function validateOrderProductsPriceAndStock(
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

  // TODO validate that products exists in database

  // TODO validate that price is this same as in database

  // TODO validate that whether more products have been purchased than are in the database

  next();
}
