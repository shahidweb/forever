import { Response } from "express";
import { AuthRequest } from "../middlewares/auth";
import Product from "../models/product.model";

export const addRating = async (req: AuthRequest, res: Response) => {
  try {
    const { productId } = req.params;
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating must be 1 to 5" });
    }

    // Prevent admin from rating
    if (req.user.role === "admin") {
      return res.status(403).json({ message: "Admin cannot rate products" });
    }

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Check if user already rated
    const existing = product.ratings.find(
      (r: any) => r.userId.toString() === req.user.id
    );

    if (existing) {
      return res
        .status(400)
        .json({ message: "You have already rated this product" });
    }

    // Add rating entry
    product.ratings.push({
      userId: req.user.id,
      rating,
    });

    // Update rating count
    product.ratingCount = product.ratings.length;

    // Calculate new average rating
    const total = product.ratings.reduce(
      (sum: number, r: any) => sum + r.rating,
      0
    );
    product.rating = Number((total / product.ratingCount).toFixed(1));

    await product.save();
    res.status(200).json({message: "Rating added successfully", product});
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
