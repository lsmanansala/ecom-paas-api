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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});

    if(!id){
      res.status(400).json({message: "Product Id is required"})
    }
    if(!updatedProduct) {
      res.status(404).json({message: "Product not found"})
    }
    res.status(200).json(updatedProduct)
  } catch (error){
    res.status(500).json({message: error})
  }
}