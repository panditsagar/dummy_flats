import React from "react";
import { MapPin, Home, Bed, Bath, Ruler } from "lucide-react";


const listings = [
    {
        id: 1,
        title: "Luxury Villa in Noida",
        image: "/background.webp",
        price: "₹1.2 Cr",
        location: "Noida, India",
        beds: 4,
        baths: 3,
        area: "3500 sqft",
    },
    {
        id: 2,
        title: "Modern Apartment in Mumbai",
        image: "/background.webp",
        price: "₹80 Lakh",
        location: "Mumbai, India",
        beds: 3,
        baths: 2,
        area: "2000 sqft",
    },
    {
        id: 3,
        title: "Penthouse in Delhi-NCR",
        image: "/background.webp",
        price: "₹2.5 Cr",
        location: "Delhi-NCR, India",
        beds: 5,
        baths: 4,
        area: "5000 sqft",
    },
    {
        id: 4,
        title: "Cozy House in Ranchi",
        image: "/background.webp",
        price: "₹50 Lakh",
        location: "Ranchi, India",
        beds: 2,
        baths: 2,
        area: "1500 sqft",
    },
    {
        id: 5,
        title: "Bungalow in Kolkata",
        image: "/background.webp",
        price: "₹90 Lakh",
        location: "Kolkata, India",
        beds: 3,
        baths: 3,
        area: "2800 sqft",
    },
    {
        id: 6,
        title: "Spacious Flat in Vrindavan",
        image: "/background.webp",
        price: "₹60 Lakh",
        location: "Vrindavan, India",
        beds: 2,
        baths: 2,
        area: "1800 sqft",
    },
];

const Listings = () => {
    return (
        <section className="py-16 bg-green-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                    Featured Listings
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Explore our top real estate listings in major cities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {listings.map((listing) => (
                        <div
                            key={listing.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{listing.title}</h3>
                                <p className="text-lg text-green-600 font-bold mt-2">{listing.price}</p>
                                <div className="flex items-center text-gray-600 text-sm mt-3">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    <span>{listing.location}</span>
                                </div>
                                <div className="flex justify-between mt-4 text-gray-600">
                                    <div className="flex items-center">
                                        <Bed className="w-5 h-5 mr-1" />
                                        <span>{listing.beds} Beds</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Bath className="w-5 h-5 mr-1" />
                                        <span>{listing.baths} Baths</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Ruler className="w-5 h-5 mr-1" />
                                        <span>{listing.area}</span>
                                    </div>
                                </div>
                                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Listings;
