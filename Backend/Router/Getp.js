import express from "express";
import Market from "../model/green.js"; 
const Router = express.Router();
Router.get("/get", async (req, res) => {
    try {
      const product = await Market.find();
      res.status(200).json(product);
    } catch (error) {
      console.error("Error", error);
      res.status(500).json({ error });
    }
  });
  export default Router;