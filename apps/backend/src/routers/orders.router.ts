import { Router } from 'express';
import { catchAsync } from '../middlewares/async.middleware';
import ordersController from '../controllers/orders.controller';

const router = Router();

router.post('/register', catchAsync(ordersController.register));

export default router;
