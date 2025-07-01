import express from 'express';
import { createProduct, getAllProducts, updateProduct, getProduct } from './product.controller';
import { protect } from '../../middlewares/auth'

const router = express.Router()

router.post('/', protect, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);

export default router
