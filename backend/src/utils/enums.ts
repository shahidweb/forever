export enum ERoleType {
  ADMIN = "admin",
  USER = "user",
}

export type TDeliveryStatus =
  | "processing"
  | "shipped"
  | "out of delivery"
  | "delivered"
  | "cancelled";

export type TPaymentMethod = "stripe" | "razorpay" | "cod";

export type TPaymentStatus = "pending" | "done";

export const deliveryStatus = [
  "processing",
  "shipped",
  "out of delivery",
  "delivered",
  "cancelled",
];
