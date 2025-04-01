import { useState } from "react";
import { motion } from "framer-motion";

const unitConversions = {
    "Square Feet": 1,
    "Square Meters": 0.092903,
    "Acres": 2.2957e-5,
    "Hectares": 9.2903e-6,
    "Square Yards": 0.111111,
    "Square Inches": 144,
};

export default function AreaConverter() {
    const [inputValue, setInputValue] = useState("");
    const [fromUnit, setFromUnit] = useState("Square Feet");
    const [convertedValues, setConvertedValues] = useState({});

    const handleConversion = (value, unit) => {
        if (!value || isNaN(value)) {
            setConvertedValues({});
            return;
        }
        const baseValue = value / unitConversions[unit];
        const results = {};
        Object.keys(unitConversions).forEach((key) => {
            results[key] = (baseValue * unitConversions[key]).toFixed(4);
        });
        setConvertedValues(results);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        handleConversion(value, fromUnit);
    };

    const handleUnitChange = (e) => {
        setFromUnit(e.target.value);
        handleConversion(inputValue, e.target.value);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-green-100 p-6">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🏡 Real Estate Area Converter</h2>

                {/* Input Section */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter area value"
                        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={fromUnit}
                        onChange={handleUnitChange}
                        className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {Object.keys(unitConversions).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Results Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                >
                    {Object.keys(convertedValues).map((key) => (
                        <div key={key} className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                            <h3 className="text-lg font-semibold text-gray-700">{key}</h3>
                            <p className="text-xl font-bold text-blue-600">{convertedValues[key]}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
