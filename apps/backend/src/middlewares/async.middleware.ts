import { Request, Response, NextFunction } from 'express';
import type { ControllerAction } from '@e-shop/types';

export function catchAsync(fn: ControllerAction) {
  return (request?: Request, response?: Response, next?: NextFunction) => {
    fn(request, response, next).catch(next);
  };
}
