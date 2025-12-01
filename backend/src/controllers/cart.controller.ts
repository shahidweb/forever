import { Response } from "express";
import { AuthRequest } from "../middlewares/auth";
import Cart, { ICartItem } from "../models/cart.model";

export const addCart = async (req: AuthRequest, res: Response) => {
  try {
    const { productId, quantity, size } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = await Cart.create({
        userId,
        items: [{ productId, quantity, size }],
      });
    } else {
      const item = cart.items.find(
        (item: ICartItem) =>
          item.productId.toString() === productId && item.size === size
      );
      if (item) {
        item.quantity = quantity;
      } else {
        cart.items.push({ productId, quantity, size });
      }
    }
    await cart.save();
    res.status(200).json({ message: "Added in Cart!", cart });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCart = async (req: AuthRequest, res: Response) => {
  try {
    const { productId, size } = req.body;
    const userId = req.user.id;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(400).json({ message: "User id is not found" });
    cart.items = cart?.items.filter(
      (item: ICartItem) =>
        !(item.productId.toString() === productId && item.size === size)
    );
    await cart?.save();
    res.json({ message: "Item removed", cart });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
