import { Router, Express } from 'express';
import brandsRouter from './brands.router';
import ordersRouter from './orders.router';
import productsRouter from './products.router';
import shippingsRouter from './shippings.router';
import categoriesRouter from './categories.router';

export function registerRoutes(app: Express) {
  const router = Router();

  router.use('/brands', brandsRouter);
  router.use('/orders', ordersRouter);
  router.use('/products', productsRouter);
  router.use('/shippings', shippingsRouter);
  router.use('/categories', categoriesRouter);

  app.use('/api/v1', router);
}
