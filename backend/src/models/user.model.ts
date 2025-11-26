import mongoose, { Document, Schema } from "mongoose";
import { ERoleType } from "../utils/enums";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  address?: object;
  role: ERoleType;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: Object, default: {} },
    role: {
      type: String,
      default: ERoleType.USER,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", userSchema);
