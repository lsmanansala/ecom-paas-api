import express from 'express'
import { createOrder} from './order.controller';
import { protect } from '../../middlewares/auth'

const router = express.Router()

router.post('/', protect, createOrder);

export default router