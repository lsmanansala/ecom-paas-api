import { Request, Response } from "express";
import Order from "../../models/order.model";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const {orderItems, totalAmount, status, shippingAddress } = req.body
    const orderItem = await Order.create({ orderItems, totalAmount, status, shippingAddress})
    
    if (!orderItems || !totalAmount|| !status || !shippingAddress) {
    return res.status(400).json({ message: 'All fields are required.' })
    }
    res.status(201).json(orderItem)
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error: error })
  }
}