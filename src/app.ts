import express from 'express';
import { connectDB } from './config/db'
import productRoutes from './modules/product/product.routes'
import authRoutes from './modules/auth/auth.routes'
import orderRoutes from './modules/order/order.routes'

const app = express()
connectDB()

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/order', orderRoutes)

export default app