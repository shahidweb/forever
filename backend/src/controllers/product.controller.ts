import { Request, Response } from "express";
import Product from "../models/product.model";

export const getProduct = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    if (!Array.isArray(req.files)) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const imageUrls = req.files.map((file: any) => {
      return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
    });
    const sizes = req.body?.sizes && JSON.parse(req.body?.sizes);
    const data = { ...req.body, sizes, images: imageUrls };
    const product = await Product.create(data);
    res.status(200).json({
      message: "Product added successfully",
      product,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Product updated", updated });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const findProd = await Product.findById(req.params.id);
    if (!findProd)
      return res
        .status(400)
        .json({ message: "Product Id is not found. Please try again!" });
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Product deleteed" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
