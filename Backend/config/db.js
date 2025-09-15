import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connect_mongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB!");
    } catch (error) {
        console.error();
    }
}