import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("server is connected")
    } catch (error) {
        console.log("server is not connected")
    }
}

export default connectDb