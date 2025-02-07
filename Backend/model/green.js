import mongoose from "mongoose";

const marketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    limit: 20,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    limit: 50,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: true,
    trim: true,
    limit: 50,
  },
});

const Market = mongoose.model("Product", marketSchema);

export default Market;
