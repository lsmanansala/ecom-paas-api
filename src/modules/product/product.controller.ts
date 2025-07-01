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

//DELETE PRODUCT
export const deleteProduct = async (req: Request, res: Response):  Promise<any> => {
  try {
    const {id} = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "PRODUCT NOT FOUND" });
    }

    return res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "PRODUCT ERROR", error });
  }
};