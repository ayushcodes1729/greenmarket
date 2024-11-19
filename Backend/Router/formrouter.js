import express from "express";
import DataForm from '../controller/formcontroller.js'; // Correct the path if needed

const router = express.Router();

// Define the POST route for "/formdata"
router.route('/formdata').post(DataForm);

export default router;
