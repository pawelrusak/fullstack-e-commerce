import { Router, Express } from 'express';
import productsRouter from './products.router';
import categoriesRouter from './categories.router';
import brandsRouter from './brands.router';

export function registerRoutes(app: Express) {
  const router = Router();

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/brands', brandsRouter);

  app.use('/api/v1', router);
}
