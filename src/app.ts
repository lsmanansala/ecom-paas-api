import express from 'express';
import { connectDB } from './config/db'
import productRoutes from './modules/product/product.routes'
import authRoutes from './modules/auth/auth.routes'

const app = express()
connectDB()

app.use(express.json())
app.use('/api/products', productRoutes)
<<<<<<< HEAD
app.use('/api/orders', productRoutes)
=======
app.use('/api/auth', authRoutes)

>>>>>>> dev
export default app