import mongoose from "mongoose";

const signSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20, 
  },
  number: {
    type: String, 
    required: true,
    trim: true,
    match: [/^[0-9]{10}$/, "Invalid phone number"], 
  },
  city: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40, 
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email format"], 
    maxlength: 30, 
  },
  password: {
    type: String,
    required: true,
    
  },
});

// Model
const NewUser = mongoose.model("NewUser", signSchema);
export default NewUser;
