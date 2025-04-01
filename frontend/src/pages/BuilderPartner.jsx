import React from 'react';
import { HandPlatter } from 'lucide-react';

const BuilderPartnerships = () => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 p-6 flex flex-col items-center">
            <div className="mb-4">
                <HandPlatter size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Builder Partnerships</h3>
            <p className="text-gray-600 text-center">
                Connect with trusted construction professionals.
            </p>
        </div>
    );
};

export default BuilderPartnerships;
