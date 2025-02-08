import mongoose from "mongoose";
import 'dotenv/config'
const URI = process.env.MONGO_URI; 

const connectdb = async () => {
    mongoose.connect(URI)
    .then(()=>{
        console.log("Database Connection successful")
    }).catch(()=>{
        console.log("Database Connection failed")
    })
};

export default connectdb;
