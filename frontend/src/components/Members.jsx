import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const teamMembers = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Real Estate Consultant",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
    },
    {
        id: 2,
        name: "Ananya Kapoor",
        role: "Property Advisor",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
    },
    {
        id: 3,
        name: "Vikram Singh",
        role: "Mortgage Specialist",
        image: "https://randomuser.me/api/portraits/men/50.jpg",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
    },
    {
        id: 4,
        name: "Pooja Verma",
        role: "Investment Consultant",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        linkedin: "#",
        twitter: "#",
        facebook: "#",
    },
];

const Members = () => {
    return (
        <section className="py-16 bg-green-100">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Meet Our Experts</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
                            <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <div className="flex justify-center space-x-4 mt-3">
                                    <a href={member.linkedin} className="text-blue-700 hover:text-blue-900">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href={member.twitter} className="text-blue-500 hover:text-blue-700">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                    <a href={member.facebook} className="text-blue-600 hover:text-blue-800">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Members;
