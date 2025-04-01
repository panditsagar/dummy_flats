import React from "react";
import { Home, MapPin, Building2 } from "lucide-react";

const services = [
    { name: "Noida", icon: <Home className="w-12 h-12 text-green-500" /> },
    { name: "Ranchi", icon: <MapPin className="w-12 h-12 text-blue-500" /> },
    { name: "Mumbai", icon: <Building2 className="w-12 h-12 text-orange-500" /> },
    { name: "Kolkata", icon: <Home className="w-12 h-12 text-red-500" /> },
    { name: "Vrindavan", icon: <MapPin className="w-12 h-12 text-purple-500" /> },
    { name: "Delhi-NCR", icon: <Building2 className="w-12 h-12 text-yellow-500" /> },
];

const Services = () => {
    return (
        <section className="py-16 bg-green-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Our Services Areas
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    We provide top-notch real estate services in these major cities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
                        >
                            <div className="mb-4">{service.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
