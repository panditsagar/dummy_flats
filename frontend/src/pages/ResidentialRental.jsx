import React from 'react';
import { Home } from 'lucide-react';

const ResidentialRentals = () => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 p-6 flex flex-col items-center">
            <div className="mb-4">
                <Home size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Residential Rentals</h3>
            <p className="text-gray-600 text-center">
                Find your perfect home from thousands of listings.
            </p>
        </div>
    );
};

export default ResidentialRentals;
