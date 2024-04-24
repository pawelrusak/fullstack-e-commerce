import { Router } from 'express';
import { catchAsync } from '../middlewares/async.middleware';
import productsController from '../controllers/products.controller';

const router = Router();

router.get('/', productsController.findAll);
router.get('/:slug', productsController.findOne);

/**
 * @todo Add authentication and admin middleware
 */
router.post('/', catchAsync(productsController.create));
router.put('/:slug', catchAsync(productsController.update));
router.delete('/:slug', catchAsync(productsController.remove));

export default router;
