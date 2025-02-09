import NewUser from "../model/signup.js";
import express from "express";
import bcrypt from "bcrypt";
const Router = express.Router();
Router.post("/login", async (req, res) =>{
    try {
        const { email, password } = req.body;
        const user = await NewUser.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
          return res.status(400).json({ message: "Invalid credentials" });
        }else{
            res.status(200).json({message:"Login successful",user:{
              _id:user._id,
                email:user.email,
                name:user.name,
                
            }});

        }
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
      }
});
export default Router;