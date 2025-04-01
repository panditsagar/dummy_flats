import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-300 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-xl text-black font-bold mb-4">Real Estate Co.</h3>
                        <p className="text-gray-700">
                            Your trusted partner in finding the perfect home. We specialize in residential, commercial, and rental properties.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg text-black font-semibold mb-4">Quick Links</h4>
                        <ul className="text-gray-800">
                            <li className="mb-2"><a href="/about" className="hover:text-white">About Us</a></li>
                            <li className="mb-2"><a href="/listings" className="hover:text-white">Listings</a></li>
                            <li className="mb-2"><a href="/services" className="hover:text-white">Services</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg text-black font-semibold mb-4">Contact Info</h4>
                        <ul className="text-gray-700">
                            <li className="mb-2">Sector 2, Greater Noida West, Uttar Pradesh, India</li>
                            <li className="mb-2">Phone: +91 9031036321</li>
                            <li className="mb-2">Email: Contact@FlatsAI.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61570928146428" 
                                className="text-blue-600 hover:text-white hover:scale-110 transition-transform duration-300">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://x.com/Flats_AI?t=B_zQfDgejsW6EZdjWNHcDg&s=08" 
                                className="text-blue-400 hover:text-white hover:scale-110 transition-transform duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://www.instagram.com/flats_ai?igsh=Y2FjaWF4OWZxYWxs" 
                                className="text-pink-500 hover:text-white hover:scale-110 transition-transform duration-300">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/connect-suraj/" 
                                className="text-blue-700 hover:text-white hover:scale-110 transition-transform duration-300">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://www.youtube.com/@Flats_AI" 
                                className="text-red-600 hover:text-white hover:scale-110 transition-transform duration-300">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t text-black border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} FlatsAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
