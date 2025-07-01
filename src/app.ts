import express from 'express';
import { connectDB } from './config/db'
import productRoutes from './modules/product/product.routes'

const app = express()
connectDB()

app.use(express.json())
app.use('/api/products', productRoutes)
app.use('/api/orders', productRoutes)
export default app