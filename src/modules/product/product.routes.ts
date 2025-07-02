import express from 'express';
<<<<<<< HEAD
import { createProduct, getAllProducts, deleteProduct} from './product.controller';
=======
import { createProduct, getAllProducts, updateProduct, getProduct } from './product.controller';
import { protect } from '../../middlewares/auth'
>>>>>>> f275841f0aa1f0a262d7ba5ed2ac6137814aa53c

const router = express.Router()

router.post('/', protect, createProduct);
router.get('/', getAllProducts);
<<<<<<< HEAD
router.delete('/:id', deleteProduct);
=======
router.get('/:id', getProduct);
router.patch('/:id', updateProduct);
>>>>>>> f275841f0aa1f0a262d7ba5ed2ac6137814aa53c

export default router
