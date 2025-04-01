import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"; // Ensure file exists

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // No need for body-parser

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello from express")
})

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
