import React from "react";
import { Link } from "react-router-dom";

const categories = [
    { id: 1, title: "Noida", count: 2, image: "/noidacity.jpg", bgColor: "bg-blue-200" },
    { id: 2, title: "Dholera", count: 10, image: "/dholera.jpg", bgColor: "bg-blue-300" },
    { id: 3, title: "Vrindavan", count: 3, image: "/prem.jpg", bgColor: "bg-blue-200" },
    { id: 4, title: "Mumbai", count: 5, image: "/gateway.jpg", bgColor: "bg-blue-200" },
    { id: 5, title: "Delhi-NCR", count: 3, image: "/india.jpg", bgColor: "bg-blue-200" },
];

const PropertyCategories = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore The City</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {categories.map((category) => (
                        <Link to={`/location/${category.title.replace(/\s+/g, "").toLowerCase()}`} key={category.id}>
                            <div className={`rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 shadow-md ${category.bgColor}`}>
                                <div className="p-4">
                                    <h3 className="font-bold text-gray-800">{category.title}</h3>
                                    <p className="text-sm text-gray-600">{category.count} Properties</p>
                                </div>
                                <div className="h-48 relative">
                                    <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyCategories;
