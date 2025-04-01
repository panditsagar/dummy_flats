import React from 'react';
import { HandPlatter, Home, Building2, PaintBucket, MoveRight } from 'lucide-react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";

const RealEstateServices = () => {
    const services = [
        {
            title: "Residential Rentals",
            description: "Find your perfect home from thousands of listings",
            icon: <Home size={40} className="text-blue-600" />,
            link: "/residential-rentals"
        },
        {
            title: "Property Purchase",
            description: "Buy apartments, villas, and commercial spaces",
            icon: <Building2 size={40} className="text-blue-600" />,
            link: "/property-purchase"
        },
        {
            title: "Builder Partnerships",
            description: "Connect with trusted construction professionals",
            icon: <HandPlatter size={40} className="text-blue-600" />,
            link: "/builder-partnerships"
        },
        {
            title: "Interior Design",
            description: "Professional home decoration services",
            icon: <PaintBucket size={40} className="text-blue-600" />,
            link: "/interior-design"
        }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };

    return (
        <div className="min-h-screen bg-green-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-gray-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Complete Real Estate Solutions</h1>
                    <p className="text-xl mb-8">Your one-stop destination for all property needs</p>
                </div>
            </div>

            {/* Services Carousel */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    itemClass="px-4"
                >
                    {services.map((service, index) => (
                        <Link key={index} to={service.link}>
                            <div className="bg-white rounded-xl shadow-lg p-6 h-full transform transition-all hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link key={index} to={service.link}>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                    <button className="mt-4 text-blue-600 hover:text-blue-700 flex items-center">
                                        Explore <MoveRight size={16} className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-500 to-gray-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Start Your Property Journey Today</h2>
                    <p className="text-lg text-blue-200 mb-8">Get in touch with our expert advisors</p>
                    <Link to="/contact">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h6m0 0l-6 6m6-6l-6-6" />
                            </svg>
                            Contact Us Now
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default RealEstateServices; 
