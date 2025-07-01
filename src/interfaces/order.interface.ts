import mongoose, { Document } from 'mongoose'

export interface IOrder extends Document {
  user?: mongoose.Types.ObjectId //optional FOR NOW
  orderItems: {
    product: mongoose.Types.ObjectId
    quantity: number
    price: number
  }[]
  totalAmount: number
  status: string
  shippingAddress: string
  createdAt: Date
  updatedAt: Date
}