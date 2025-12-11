import mongoose, { Schema, Document } from "mongoose";

export interface IRating {
  userId: mongoose.Types.ObjectId;
  rating: number;
}

export interface IProduct extends Document {
  name: string;
  price: number;
  images: string[];
  category: string;
  type: string;
  description?: string;
  stock: number;
  sizes: string[];
  bestSeller: boolean;
  rating: number; // Average rating (0–5)
  ratingCount: number; // Total users who rated
  ratings: IRating[]; // Detailed rating list
}

const productSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    images: {
      type: [String],
      required: true,
      // validate: {
      //   validator: (val: string[]) => val.length >= 4,
      //   message: "Product must contain more than 4 images",
      // },
    },
    category: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    stock: { type: Number, default: 0 },
    bestSeller: { type: Boolean, default: false },
    sizes: {
      type: [String],
      enum: ["S", "M", "L", "XL", "XXL"],
      default: ["S", "M", "L", "XL", "XXL"],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    // 👥 Number of users who rated
    ratingCount: {
      type: Number,
      default: 0,
    },

    // ⭐⭐ Detailed rating list (each user can rate once)
    ratings: [
      {
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>("Product", productSchema);
