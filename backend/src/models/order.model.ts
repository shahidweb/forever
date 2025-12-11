import { Document, Schema, model } from "mongoose";
import {
  TDeliveryStatus,
  TPaymentMethod,
  TPaymentStatus,
} from "../utils/enums";

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

export interface IPaymentInfo {
  orderId: string;
  paymentId: string;
  signature: string;
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
  paymentStatus: TPaymentStatus;
  paymentInfo: IPaymentInfo;
  createdAt: Date;
  updatedAt: Date;
}

const OrderPaymentScehma = new Schema<IPaymentInfo>(
  {
    orderId: { type: String },
    paymentId: { type: String },
    signature: { type: String },
  },
  { _id: false }
);

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
        "processing",
        "shipped",
        "out_of_delivery",
        "delivered",
        "cancelled",
      ],
      default: "processing",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "done"],
      default: "pending",
    },
    paymentInfo: {
      type: OrderPaymentScehma,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", OrderSchema);
