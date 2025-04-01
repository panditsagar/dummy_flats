import express from "express";
import { handleContactForm } from "../controllers/contactController.js";
const router = express.Router();

router.route("/user").post(handleContactForm);

export default router;