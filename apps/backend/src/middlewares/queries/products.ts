import { Request, Response, NextFunction } from 'express';
import { Product } from '@e-shop/database/models';
import { getSchemaPaths } from '@e-shop/database/utils';
import { pickBy, isPlainObject } from 'lodash';

type RequestQuery = Request['query'];

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

function getSortObject(sortQuery: unknown) {
  const sortObject = sortQueryToObject(sortQuery);

  // this is a hack to get default mongoose sort
  const fakeSortObject = { __foo: '' };

  return Object.keys(sortObject).length ? sortObject : fakeSortObject;
}

// @todo think about rename to getFilters
function getProductFilter(requestQuery: RequestQuery) {
  const queryWithNestedObjects = removeUnknownProperties(
    requestQuery,
    getSchemaPaths(Product.schema)
  );

  return removePropertiesWithObject(queryWithNestedObjects);
}

// @todo rename this function
export function getProductsQueryAndSort(
  request: Request,
  response: Response,
  next: NextFunction
) {
  /**
   * Query
   */
  response.locals.query = getProductFilter(request.query);

  /**
   * Sort
   */
  response.locals.sort = getSortObject(request.query.sort);

  /**
   * Limit
   */
  // @todo use nodeEnv? or other way to set default limit
  response.locals.limit = parseInt(
    (request.query.limit as string | undefined) || '1000',
    10
  );

  next();
}
