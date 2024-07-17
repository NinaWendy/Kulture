import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://samwelmabonga:samwelmabonga@cluster0.m5mmlht.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
