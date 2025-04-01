import React from "react";

const AboutUs = () => {
    return (
        <section className="bg-green-100 py-12">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Section Heading */}
                <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        About <span className="text-green-700">Us</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Your trusted partner in finding your dream home.
                    </p>
                </div>

                {/* Company Info */}
                <div className="mt-10 grid md:grid-cols-2 gap-8 items-center">
                    <img
                        src="/trust.png"
                        alt="Real Estate"
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Who We Are
                        </h3>
                        <p className="mt-4 text-gray-600">
                            We are a leading real estate agency dedicated to helping people
                            find their perfect homes. With years of experience in the industry,
                            we provide top-notch services and expert advice to ensure a smooth
                            buying, selling, or renting experience.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Our team of professionals is passionate about connecting people
                            with the right properties. Whether you're looking for a cozy
                            apartment or a luxurious villa, we've got you covered.
                        </p>
                    </div>
                </div>

                {/* Our Mission */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our mission is to make real estate transactions effortless and
                        stress-free. We believe in integrity, transparency, and delivering
                        exceptional service to our clients.
                    </p>
                </div>

                {/* Our Team */}
                {/* <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-800 text-center">
                        Meet Our Team
                    </h3>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { name: "John Doe", role: "Founder & CEO", img: "./background.webp" },
                            { name: "Jane Smith", role: "Lead Agent", img: "./background.webp" },
                            { name: "Michael Lee", role: "Marketing Head", img: "/background.webp" },
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-24 h-24 mx-auto rounded-full"
                                />
                                <h4 className="mt-4 text-lg font-semibold">{member.name}</h4>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default AboutUs;
