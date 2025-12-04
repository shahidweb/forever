import { Response } from "express";
import { AuthRequest } from "../middlewares/auth";
import Cart from "../models/cart.model";
import { Order } from "../models/order.model";

export const placeOrder = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const { address, paymentMethod, subtotal, shipping, total } = req.body;

    if (!address || !paymentMethod) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Fetch cart with product details
    const cart = await Cart.findOne({ userId }).populate(
      "items.productId",
      "price"
    );

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Prepare order items
    const orderItems = cart.items.map((item) => ({
      productId: item.productId._id,
      quantity: item.quantity,
      size: item.size,
    }));

    // Create the order
    const order = await Order.create({
      userId,
      items: orderItems,
      address,
      paymentMethod,
      subtotal,
      shipping,
      total,
      status: paymentMethod !== "cod" ? "pending" : "processing",
    });

    // Clear cart
    cart.items = [];
    await cart.save();

    return res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getUserOrders = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ userId })
      .populate("items.productId")
      .sort({ createdAt: -1 });

    const result = orders.map((order: any) => ({
      id:order.id,
      createdAt: order.createdAt,
      paymentMethod: order.paymentMethod,
      status: order.status,
      subtotal: order.subtotal,
      shipping: order.shipping,
      total: order.total,
      items: order.items.map((item: any) => ({
        quantity: item.quantity,
        size: item.size,
        name: item.productId?.name,
        price: item.productId?.price,
        image: item.productId?.images[0] || null,
      })),
    }));
    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

// admin
export const getAllOrders = async (req: any, res: Response) => {
  try {
    const orders = await Order.find()
      .populate("items.productId")
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    return res.json({ orders });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
