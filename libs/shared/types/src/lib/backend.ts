import { Request, Response, NextFunction } from 'express';

export type ControllerAction = (
  request?: Request,
  response?: Response,
  next?: NextFunction
) => Promise<unknown>;

export type Controller = {
  findAll?: ControllerAction;
  findOne?: ControllerAction;
  create?: ControllerAction;
  update?: ControllerAction;
  remove?: ControllerAction;
  [actionName: string]: ControllerAction | undefined;
};
