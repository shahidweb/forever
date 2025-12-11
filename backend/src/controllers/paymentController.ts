import { Request, Response } from "express";
import { razorpayInstance } from "../config/razorpay";

export const createRazorpayOrder = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body; // Amount in rupees

    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpayInstance.orders.create(options);

    return res.status(200).json({
      success: true,
      data: {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
