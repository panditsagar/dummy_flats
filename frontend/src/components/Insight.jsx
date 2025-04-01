import { motion } from "framer-motion";
import { FaCalculator, FaRulerCombined } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation

const tools = [
    {
        title: "EMI Calculator",
        description: "Calculate your home loan EMI",
        icon: <FaCalculator className="text-5xl text-green-600" />,
        link: "/emi",
    },
    {
        title: "Area Converter",
        description: "Convert one area into any other easily",
        icon: <FaRulerCombined className="text-5xl text-green-600" />,
        link: "/area-converter", // Placeholder link for now
    },
];

export default function InsightsTools() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-green-100 p-6">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
                <div className="flex justify-center items-center space-x-3 mb-6">
                    <div className="bg-blue-600 text-white p-4 rounded-full">
                        <span className="text-2xl">💡</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Helpful Tools</h2>
                        <p className="text-gray-600 text-lg">Make your calculations easier</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            {tool.icon}
                            <h3 className="text-xl font-semibold text-gray-900 mt-4">{tool.title}</h3>
                            <p className="text-gray-700 mt-2">{tool.description}</p>
                            <Link
                                to={tool.link}
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Open
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
