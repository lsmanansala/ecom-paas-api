import express from 'express';
import { protect } from '../../middlewares/auth'
import { createProduct, getAllProducts, updateProduct } from './product.controller';

const router = express.Router()

router.post('/', protect, createProduct);
router.get('/', getAllProducts);
router.patch('/:id', updateProduct);

export default router
