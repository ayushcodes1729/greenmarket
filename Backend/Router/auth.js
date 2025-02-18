import NewUser from "../model/signup.js";
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import authMiddleware from "../utils/authMiddleware.js";
dotenv.config();

const Router = express.Router();
Router.post("/signup", async (req, res) => {
  try {
    const { name, number, city, email, password } = req.body;
    const userExists = await NewUser.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "user already exist" });
    } else {
        //use new keyword to create a new instance of the model
        const hashedpss= await bcrypt.hash(password, 10);
      const user = new NewUser({
        name,
        number,
        city,
        email,
        password:hashedpss,
      });
      const savedData = await user.save();
      const token = await savedData.getJWT();
      res.cookie("token", token,{
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
      })      
      res.status(201).json({ 
        message: "user registered successfully",
        data: savedData
      });
    }
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error });
  }
});
export default Router;