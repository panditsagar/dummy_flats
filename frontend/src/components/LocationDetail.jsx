import React from "react";
import { useParams } from "react-router-dom";

const LocationDetail = () => {
    const { location } = useParams();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-4xl font-bold text-gray-800">{location.toUpperCase()}</h2>
            <p className="text-gray-600 mt-2">
                Detailed information about {location}. You can add more details here.
            </p>
        </div>
    );
};

export default LocationDetail;
