import mongoose from "mongoose";

const signSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20, // ✅ Use maxlength instead of limit
  },
  number: {
    type: String, // ✅ Change from Number to String to match regex
    required: true,
    trim: true,
    match: [/^[0-9]{10}$/, "Invalid phone number"], // ✅ Add error message
  },
  city: {
    type: String,
    required: true,
    trim: true,
    maxlength: 40, // ✅ Corrected
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Invalid email format"], // ✅ Error message added
    maxlength: 30, // ✅ Corrected
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // ✅ Add minimum length for security
    maxlength: 20, // ✅ Corrected
  },
});

// Model
const NewUser = mongoose.model("NewUser", signSchema);
export default NewUser;
