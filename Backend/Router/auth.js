import NewUser from "../model/signup.js";
import express from "express";
const Router = express.Router();
Router.post("/signup", async (req, res) => {
  try {
    const { name, number, city, email, password } = req.body;
    const userExists = await NewUser.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "user already exist" });
    } else {
        //use new keyword to create a new instance of the model
      const user = new NewUser({
        name,
        number,
        city,
        email,
        password,
      });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error });
  }
});
export default Router;