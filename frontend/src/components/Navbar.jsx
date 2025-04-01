import React, { useState } from 'react';
import { Phone, User, Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Logout from '../pages/Logout';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice.js"; // Correct import



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    // const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // Handle logout action
    const handleLogout = () => {
        dispatch(logout()); // Correct function call
        navigate("/login"); // Redirect to login page
    };



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <nav className="bg-green-400 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Side - Menu Items */}
                    <div className="hidden md:flex space-x-8">
                        <button className="text-gray-700 hover:text-gray-900 font-medium">Home</button>
                        <button className="text-gray-700 hover:text-gray-900 font-medium">
                            <Link to="/listings">Listings</Link>
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 font-medium">
                            <Link to="/members">Members</Link>
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 font-medium">
                            <Link to="/blog">Blogs</Link>
                        </button>

                        {/* Dropdown for Pages */}
                        <div className="relative">
                            <button
                                className="flex items-center text-gray-700 hover:text-gray-900 font-medium"
                                onClick={toggleDropdown}
                            >
                                Pages
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
                                    <ul className="py-2 text-gray-700">
                                        {["Flats in Ranchi", "Flats in Mumbai", "Flats in Noida", "Flats in Delhi-NCR"].map((item, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={closeDropdown}
                                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button className="text-gray-700 hover:text-gray-900 font-medium">
                            <Link to="/contact">Contact</Link>
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <div className="flex items-center">
                            <div className="h-8 w-8">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 22V12H15V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="ml-2 text-xl font-bold text-gray-800">
                                <Link to="/">FlatsAI</Link>
                            </span>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center text-gray-700">
                            <Phone className="h-5 w-5" />
                            <span className="ml-2">+91 9031036321</span>
                        </div>

                        {/* <Link to="/signup">
                            <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
                                <User className="h-5 w-5 text-gray-700" />
                            </div>
                        </Link> */}

                        {user ? <div >
                            {/* Logout Button */}
                            <button
                                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </div> : <Link to="/signup">
                            <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
                                 
                                <User className="h-5 w-5 text-gray-700" />
                            </div>
                        </Link>}
                        <a href="#" className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-md shadow-sm">
                            Add Property
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
                            <Link to="/">Home</Link>
                        </button>
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
                            <Link to="/listings">Listings</Link>
                        </button>
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
                            <Link to="/members">Members</Link>
                        </button>
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
                            <Link to="/blog">Blogs</Link>
                        </button>
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">Pages</button>
                        <button className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
                            <Link to="/contact">Contact</Link>
                        </button>
                        {user ? (
                            <div className="flex items-center md:hidden"> {/* Visible only on mobile */}
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105 text-sm"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/signup" className="flex items-center md:hidden"> {/* Visible only on mobile */}
                                <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer flex justify-center items-center">
                                    <User className="h-5 w-5 text-gray-700" />
                                </div>
                            </Link>
                        )}

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
