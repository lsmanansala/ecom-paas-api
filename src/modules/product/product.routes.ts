import express from 'express';
import { createProduct, getAllProducts, updateProduct, getProduct } from './product.controller';

const router = express.Router()

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);

export default router
