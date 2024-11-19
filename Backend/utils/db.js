import mongoose from "mongoose";
import 'dotenv/config'
const URI = process.env.MONGO_URI; 

const connectdb = async () => {
    mongoose.connect(URI)
    .then(()=>{
        console.log("connection created sucessfully")
    }).catch(()=>{
        console.log("error in connectiing database")
    })
};

export default connectdb;
