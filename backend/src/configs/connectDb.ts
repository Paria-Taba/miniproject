import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGO_URI as string;
    if (!mongoURI) {
      throw new Error("MONGO_URI is missing in .env file");
    }

    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;