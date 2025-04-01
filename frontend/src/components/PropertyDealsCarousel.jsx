import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MapPin, Bed, Bath, Square } from "lucide-react";

const PropertyDealsCarousel = () => {
    const properties = [
        {
            id: 1,
            title: "Ace Starlit",
            address: "Noida",
            type: "FOR SALE",
            featured: false,
            beds: 4,
            baths: 2,
            sqft: 450,
            image: "/noida.jpg",
        },
        {
            id: 2,
            title: "Samriddhi Park",
            address: "Ara Gate, Ranchi",
            type: "FOR SALE",
            featured: false,
            beds: 4,
            baths: 2,
            sqft: 400,
            image: "/ara.jpg",
        },
        {
            id: 3,
            title: "Savitri Enclave",
            address: "Samlong Ranchi",
            type: "FOR SALE",
            featured: true,
            beds: 4,
            baths: 2,
            sqft: 450,
            image: "/samlong.jpg",
        },
        {
            id: 4,
            title: "Royal Residency",
            address: "Pundag near IIM Ranchi",
            type: "FOR SALE",
            featured: false,
            beds: 3,
            baths: 2,
            sqft: 500,
            image: "/royal.jpg",
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // Show three items at a time
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2, // Show two items at a time
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1, // Show one item at a time
        },
    };

    const getBadgeColor = (type) => {
        if (type === "FOR SALE") return "bg-green-800";
        if (type === "FOR RENT") return "bg-blue-800";
        return "bg-gray-800";
    };

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Discover Our Best Deals
                    </h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </div>

                {/* Carousel */}
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={500}
                    partialVisible={true} // Use partialVisible
                    itemClass="px-4"
                >



                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-lg shadow-md hover:bg-gray-100 transition-shadow"
                        >
                            {/* Property Image */}
                            <div className="relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-64 object-cover rounded-t-lg"
                                />
                                {/* Status badges */}
                                <div className="absolute top-4 left-4 flex space-x-2">
                                    <span
                                        className={`${getBadgeColor(
                                            property.type
                                        )} text-white text-xs px-3 py-1 rounded-md font-medium`}
                                    >
                                        {property.type}
                                    </span>
                                    {property.featured && (
                                        <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-md font-medium">
                                            FEATURED
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="p-4">
                                <h3 className="font-bold text-xl mb-2">{property.title}</h3>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <MapPin size={16} className="mr-1" />
                                    <span>{property.address}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-4">
                                        <div className="flex items-center text-gray-600">
                                            <Bed size={16} className="mr-1" />
                                            <span>{property.beds}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Bath size={16} className="mr-1" />
                                            <span>{property.baths}</span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <Square size={16} className="mr-1" />
                                            <span>{property.sqft} sqft</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default PropertyDealsCarousel;
