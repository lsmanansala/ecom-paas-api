import express from 'express';
import { createProduct, getAllProducts, deleteProduct} from './product.controller';

const router = express.Router()

router.post('/', createProduct);
router.get('/', getAllProducts);
router.delete('/:id', deleteProduct);

export default router
