import { ZodError } from 'zod';
import mongoose from 'mongoose';
import {
  InvalidObjectIdsError,
  RegisterOrderError,
  STATUS_CODE,
} from '@e-shop/utils';

import type { Response } from 'express';
import type { ErrorsResponseBody } from '@e-shop/types/response';

/**
 * @see {@link https://mongoosejs.com/docs/api/error.html | Mongoose Errors}
 */
type AppError =
  | Error
  | mongoose.mongo.MongoServerError
  | ZodError
  | mongoose.Error.DocumentNotFoundError;

export const errorHandler = (
  error: AppError,
  request,
  response: Response<ErrorsResponseBody>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next,
) => {
  switch (error.constructor) {
    case mongoose.mongo.MongoServerError:
      {
        const err = error as mongoose.mongo.MongoServerError;

        response.status(STATUS_CODE.BAD_REQUEST).json({
          message: err.message,
          status: STATUS_CODE.BAD_REQUEST,
        });
      }
      break;

    case ZodError:
      {
        const err = error as ZodError;

        response.status(STATUS_CODE.BAD_REQUEST).json({
          message: err.message,
          status: STATUS_CODE.BAD_REQUEST,
          errors: err.issues,
        });
      }
      break;

    case mongoose.Error.DocumentNotFoundError:
      {
        const err = error as mongoose.Error.DocumentNotFoundError;

        response.status(STATUS_CODE.NOT_FOUND).json({
          message: err.message,
          status: STATUS_CODE.NOT_FOUND,
        });
      }

      break;

    case RegisterOrderError:
    case InvalidObjectIdsError:
      {
        const err = error as InvalidObjectIdsError | RegisterOrderError;

        response.status(STATUS_CODE.UNPROCESSABLE_CONTENT).json({
          message: err.message,
          status: STATUS_CODE.UNPROCESSABLE_CONTENT,
        });
      }
      break;

    default:
      response.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
        message: 'Something broke!',
        status: STATUS_CODE.INTERNAL_SERVER_ERROR,
      });
      break;
  }
};
