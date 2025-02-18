import express from "express";
import Market from "../model/green.js"; 
import authMiddleware from "../utils/authMiddleware.js";
const Router = express.Router();
Router.get("/get", authMiddleware,async (req, res) => {
    try {
      const product = await Market.find();
      res.status(200).json(product);
    } catch (error) {
      console.error("Error", error);
      res.status(500).json({ error });
    }
  });
  export default Router;