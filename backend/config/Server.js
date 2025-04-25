import mongoose from "mongoose";

export const MainServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://multiera95:95@berry.mpespql.mongodb.net/?retryWrites=true&w=majority&appName=berry");
        console.log("server is running");
    } catch (error) {
        console.log("server is not responde")
    }

};


