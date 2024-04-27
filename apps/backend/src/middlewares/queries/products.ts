import { Request, Response, NextFunction } from 'express';
import { Product } from '@e-shop/database/models';
import { pickBy, isPlainObject } from 'lodash';

const ALLOWED_SORT_DIRECTION = ['asc', 'desc'];

function removeUnknownProperties(obj: object, allowedKeys: string[]) {
  return pickBy(obj, (_, key) => allowedKeys.includes(key));
}

function removePropertiesWithObject(obj: object): object {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!isPlainObject(value)) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

/**
 * Inspired by Strapi sorting
 *
 * @see {@link https://docs.strapi.io/dev-docs/api/rest/sort-pagination#example-sort-using-2-fields-and-set-the-order}
 */
function sortQueryToObject(sortQuery: unknown) {
  const sort = {};

  if (sortQuery && typeof sortQuery === 'string') {
    const [key, order] = sortQuery.split(':');

    sort[key] = ALLOWED_SORT_DIRECTION.includes(order) ? order : 'desc';
  }

  return sort;
}

export function getProductsQueryAndSort(
  request: Request,
  response: Response,
  next: NextFunction
) {
  /**
   * Query
   */
  const queryWithNestedObjects = removeUnknownProperties(
    request.query,
    Object.keys(Product.schema.paths)
  );

  response.locals.query = removePropertiesWithObject(queryWithNestedObjects);

  /**
   * Sort
   */
  response.locals.sort = sortQueryToObject(request.query.sort);

  next();
}
