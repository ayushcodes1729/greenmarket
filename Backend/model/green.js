import mongoose from "mongoose";


const dbName = "mongopractice";
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB successfully.");
}).catch((err) => {
  console.error("Database connection error:", err);
});


const marketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: false }, 
    image: { type: String, required: true },
});


const Market = mongoose.model("Product", marketSchema);

export default Market;
