import { Request, Response } from "express";
import Product from "../../models/product.model";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock } = req.body
    const product = await Product.create({ name, price, description, stock})
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error: error })
  }
}