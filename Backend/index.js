import express from "express";
import Market from "./model/green.js";
import createRoute from "./Router/Postp.js";
import signupRoute from "./Router/auth.js";
import getRoute from "./Router/Getp.js";
import cors from "cors";
import connectdb from "./utils/db.js";
import "dotenv/config";
const PORT = process.env.PORT;
const app = express();
app.use(
  cors({
    origin: "*", // Frontend URL
    methods: ["GET", "POST"],
  })
);

connectdb();

app.use(express.json()); // Use built-in middleware for JSON
app.use(express.urlencoded({ extended: false })); // For URL-encoded data
app.use("/create", createRoute);
app.use("/get", getRoute);
app.use("/auth", signupRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
