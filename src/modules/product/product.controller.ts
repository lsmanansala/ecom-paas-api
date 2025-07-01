import { Request, Response } from "express";
import Product from "../../models/product.model";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products)
  } catch (error) {
    console.error(error)
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, stock } = req.body
    const product = await Product.create({ name, price, description, stock})
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error: error })
  }
}

