import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative text-center bg-gradient-to-b from-green-400 to-white py-16 px-6 md:py-24 bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 bg-green-100 opacity-30 animate-pulse"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
                    Find Your Dream Flat with
                    <span className="text-green-600 animate-bounce inline-block"> FlatsAI.com</span>
                </h1>
                <p className="mt-4 text-gray-700 text-lg md:text-xl animate-slideUp">
                    The Largest Real-Estate Platform in India
                    <span className="font-semibold">(by dimension)</span>
                </p>
                <button className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn shadow-lg">
                    <Link to="/login">Explore Now</Link>
                </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>
    );
};

export default HeroSection;
