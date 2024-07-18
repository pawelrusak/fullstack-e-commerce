import { ZodError } from 'zod';
import mongoose from 'mongoose';

import type { Response } from 'express';
import type { ErrorsResponseBody } from '@e-shop/types/response';

/**
 * @see {@link https://mongoosejs.com/docs/api/error.html | Mongoose Errors}
 */
type AppError = Error | mongoose.mongo.MongoServerError | ZodError;

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

        response.status(400).json({
          message: err.message,
          status: 400,
        });
      }
      break;
    case ZodError:
      {
        const err = error as ZodError;

        response.status(400).json({
          message: err.message,
          status: 400,
          errors: err.issues,
        });
      }
      break;
    default:
      response.status(500).json({
        message: 'Something broke!',
        status: 500,
      });
      break;
  }
};
