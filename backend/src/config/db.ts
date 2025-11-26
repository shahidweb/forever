import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("DB is connected");
  } catch (error) {
    console.log("Db connect is failed", error);
    process.exit(1);
  }
};