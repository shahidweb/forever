export enum ERoleType {
  ADMIN = "admin",
  USER = "user",
}

export type TDeliveryStatus =
  | "pending"
  | "processing"
  | "paid"
  | "shipped"
  | "delivered"
  | "cancelled";

export type TPaymentMethod = "stripe" | "razorpay" | "cod";
