import { contact } from "../models/Contact.js";

export const handleContactForm = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }


    try {
        // Save to MongoDB
        await contact.create({ name, email, phone, message });

        return res.status(200).json({ success: "Message stored in DB successfully!" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to process request" });
    }
};
