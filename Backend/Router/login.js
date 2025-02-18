import NewUser from "../model/signup.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authMiddleware from "../utils/authMiddleware.js";
const Router = express.Router();
Router.post("/login",async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await NewUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
    
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
});
Router.post("/logout",async(req,res)=>{
 try {
  res.cookie("token",null, {
    expires: new Date(Date.now()),
  });
  res.status(200).json({ message: "Logout successful" });
  
 } catch (error) {
  res.status(500).json({ message: "Something went wrong" });
  console.log(error);
 }
});
export default Router;