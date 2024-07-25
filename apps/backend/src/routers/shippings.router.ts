import { Router } from 'express';
import { catchAsync } from '../middlewares/async.middleware';
import shippingController from '../controllers/shippings.controller';

export const router = Router();

router.get('/', catchAsync(shippingController.findAll));

export default router;
