import mongoose from "mongoose";

export const connect_mongodb = async () => {
    try {
        await mongoose.connect("mongodb+srv://test_db:0FaeYYOKeRauc0Mh@cluster0.unekmnd.mongodb.net/mini-project");
        console.log("Connected to DB!");
    } catch (error) {
        console.error();
    }
}