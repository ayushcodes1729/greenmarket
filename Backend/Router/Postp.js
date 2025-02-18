import express from "express";
import Market from "../model/green.js"; 
import authMiddleware from "../utils/authMiddleware.js";
const Router = express.Router();
Router.post("/create",authMiddleware, async (req, res) => {
    try {
      const { name, description, category, quantity, price, weight, image } =
        req.body;
      console.log(req.body);
      if (!name || !description || !category || !quantity || !price) {
        console.error("Validation error: Missing required fields:", req.body);
        return res
          .status(400)
          .json({ message: "All required fields must be filled" });
      }
      const marketData = await Market.create({
        name,
        description,
        category,
        quantity,
        price,
        weight,
        image,
      });
      console.log(marketData);
     res.status(201).json({
        message: "Market data created successfully",
        data: marketData,
      });
    } catch (error) {
      console.error("Error creating market data:", error);
      res.status(500).json({
        message: "Failed to create market data",
        error: error.message,
      });
    }
  });
  export default Router;