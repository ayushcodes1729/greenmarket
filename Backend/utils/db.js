import mongoose from "mongoose";

const URI = process.env.MONGO_URI; 

const connectdb = async () => {
    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
};

export default connectdb;
