import { Router } from 'express';
import brandsController from '../controllers/brands.controller';

const router = Router();

router.get('/', brandsController.findAll);

export default router;
