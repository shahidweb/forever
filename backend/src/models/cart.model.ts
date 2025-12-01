import mongoose, { Schema } from "mongoose";

export interface ICartItem {
  productId: mongoose.Types.ObjectId;
  quantity: number;
  size: string;
}

export interface ICart {
  userId: mongoose.Types.ObjectId;
  items: ICartItem[];
}

const CartItemsSchema = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, default: 1 },
    size: { type: String, required: true },
  },
  { _id: false }
);

const cartSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  items: {
    type: [CartItemsSchema],
    default: [],
  },
});

export default mongoose.model<ICart>("Cart", cartSchema);
