import React from 'react';
import { Building2 } from 'lucide-react';

const PropertyPurchase = () => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 p-6 flex flex-col items-center">
            <div className="mb-4">
                <Building2 size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Purchase</h3>
            <p className="text-gray-600 text-center">
                Buy apartments, villas, and commercial spaces.
            </p>
        </div>
    );
};

export default PropertyPurchase;
