import { Schema, model, Document } from "mongoose";
import { TDeliveryStatus, TPaymentMethod } from "../utils/enums";

export interface IOrderItem {
  productId: Schema.Types.ObjectId;
  quantity: number;
  size: string;
}

export interface IAddress {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
}

export interface IOrder extends Document {
  userId: Schema.Types.ObjectId;
  items: IOrderItem[];
  address: IAddress;
  paymentMethod: TPaymentMethod;
  subtotal: number;
  shipping: number;
  total: number;
  status: TDeliveryStatus;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
  },
  { _id: false }
);

const AddressSchema = new Schema<IAddress>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { _id: false }
);

export const OrderSchema = new Schema<IOrder>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: {
      type: [OrderItemSchema],
      required: true,
    },
    address: {
      type: AddressSchema,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["stripe", "razorpay", "cod"],
      default: "cod",
      required: true,
    },
    subtotal: { type: Number, required: true },
    shipping: { type: Number, required: true },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "paid",
        "shipped",
        "delivered",
        "cancelled",
      ],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", OrderSchema);
