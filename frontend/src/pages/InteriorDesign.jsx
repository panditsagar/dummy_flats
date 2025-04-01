import React from 'react';
import { PaintBucket } from 'lucide-react';

const InteriorDesign = () => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 p-6 flex flex-col items-center">
            <div className="mb-4">
                <PaintBucket size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
            <p className="text-gray-600 text-center">
                Professional home decoration services to beautify your space.
            </p>
        </div>
    );
};

export default InteriorDesign;
