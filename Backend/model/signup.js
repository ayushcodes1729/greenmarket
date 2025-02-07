import mongoose from "mongoose";
const signSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    limit: 20,
  },

  number: {
    type: Number,
    required: true,
    trim: true,
    match: /^[0-9]{10}$/,
    limit: 10,
  },
  city: {
    type: String,
    required: true,
    trim: true,
    limit: 40,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    limit: 30,
  },
  password: {
    type: String,
    required: true,
    limit: 20,
  },
});
const newuser = mongoose.model("newuser", signSchema);
export default newuser;
