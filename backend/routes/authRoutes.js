import express from "express";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

// SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, address, district, state, pincode, email, password } = req.body;
     

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const newUser = await User.create({ firstName, lastName, address, district, state, pincode, email, password });

    res.status(201).json({ message: "Signup successful, please login" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed", error });
  }
});

// LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        user
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
});

export default router;