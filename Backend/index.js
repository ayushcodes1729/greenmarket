import express from "express";
import Market from "./model/green.js";  // Ensure the correct file path
import cors from "cors";
import connectdb from "./utils/db.js";
import 'dotenv/config'
const PORT = process.env.PORT;
const app = express();
 app.use(cors());

connectdb()

// Middleware to parse JSON and URL-encoded requests
app.use(express.json());  // Use built-in middleware for JSON
app.use(express.urlencoded({ extended: false }));  // For URL-encoded data

// Route to create a new market entry
app.post("/create", async (req, res) => {
  try {
    const { name, description, category, quantity, price, weight, image } = req.body;
    console.log(req.body)
    // Ensure that the required fields are provided
    if (!name || !description || !category || !quantity || !price) {
      console.error("Validation error: Missing required fields:", req.body);
      return res.status(400).json({ message: 'All required fields must be filled' });
    }
    

    // Create and save the market data
    const marketData = await Market.create({
      name,
      description,
      category,
      quantity,
      price,
      weight,
      image,
    });
    console.log(marketData)
    // Send success response
    res.status(201).json({
      message: "Market data created successfully",
      data: marketData,
     
    });
  } catch (error) {
    console.error("Error creating market data:", error);

    // Send error response
    res.status(500).json({
      message: "Failed to create market data",
      error: error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
