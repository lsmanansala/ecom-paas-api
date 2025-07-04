import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ecomm')
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error');
    process.exit(1);
  }
}