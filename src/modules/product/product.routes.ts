import express from 'express';
import { createProduct, getAllProducts, updateProduct } from './product.controller';

const router = express.Router()

router.post('/', createProduct);
router.get('/', getAllProducts);
router.patch('/:id', updateProduct);

export default router
