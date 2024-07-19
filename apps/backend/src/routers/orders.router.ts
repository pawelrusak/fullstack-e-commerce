import { Router } from 'express';
import { catchAsync } from '../middlewares/async.middleware';
import ordersController from '../controllers/orders.controller';
import { validateOrderProductsPriceAndStock } from '../middlewares/validations';

const router = Router();

router.post(
  '/register',
  catchAsync(validateOrderProductsPriceAndStock),
  catchAsync(ordersController.register),
);

export default router;
