import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice.js"; // Correct import

const Logout = () => {
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Handle logout action
    const handleLogout = () => {
        dispatch(logout()); // Correct function call
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">
            {/* Logout Button */}
            <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => setShowPopup(true)}
            >
                Logout
            </button>

            {/* Confirmation Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96 text-center transform transition-all duration-300 scale-100 hover:scale-105">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            Are you sure you want to log out?
                        </h2>

                        <div className="flex justify-center space-x-4">
                            <button
                                className="bg-gray-300 dark:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-700 transition-all duration-200"
                                onClick={() => setShowPopup(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-red-600 transition-all duration-200"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logout;
