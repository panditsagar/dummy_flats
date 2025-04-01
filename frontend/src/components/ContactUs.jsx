import React, { useState } from "react";

const API_URL = "http://localhost:3000/api/contact/";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMsg, setResponseMsg] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await fetch(`${API_URL}/user`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            setResponseMsg(data.message || "Message sent successfully!");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMsg("Server error. Please try again later.");
        }
    
        setLoading(false);
    };
    
    return (
        <section className="py-16 bg-green-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Phone Number"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                            {responseMsg && <p className="mt-4 text-center text-green-600">{responseMsg}</p>}
                        </form>
                    </div>

                    {/* Contact Information and Map */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-6">Our Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-blue-600 mr-4"></i>
                                <p className="text-gray-700">Kantatoli, Ranchi, India</p>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-phone text-blue-600 mr-4"></i>
                                <p className="text-gray-700">+1 (234) 567-890</p>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-blue-600 mr-4"></i>
                                <p className="text-gray-700">info@realestateco.com</p>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="mt-8">
                            <iframe
                                title="Company Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a6c5bf4c4e!2s123%20Main%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1622549400000!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
