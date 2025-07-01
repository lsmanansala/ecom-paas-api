import { IOrder } from './../interfaces/order.interface';
import mongoose, { Schema, Document } from 'mongoose'

const orderItemSchema = new Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  price: {
    type: Number,
    required: true,
  },
})

const orderSchema = new Schema(
  {
    // removing user for now, will add later
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    orderItems: [orderItemSchema],
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    shippingAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model<IOrder>('Order', orderSchema)
