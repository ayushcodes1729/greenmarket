import mongoose from "mongoose";

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
