import { useState } from "react";
import { motion } from "framer-motion";

export default function EMICalculator() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [emi, setEmi] = useState(null);

    const calculateEMI = () => {
        if (principal && rate && time) {
            const P = parseFloat(principal);
            const r = parseFloat(rate) / 12 / 100;
            const n = parseFloat(time) * 12;
            const emiValue = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
            setEmi(emiValue.toFixed(2));
        } else {
            setEmi(null);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-50 to-green-100 p-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full"
            >
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">EMI Calculator</h2>
                <p className="text-gray-600 text-center mb-6">Calculate your loan EMI instantly</p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                >
                    <input
                        type="number"
                        placeholder="Loan Amount (₹)"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Interest Rate (%)"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        placeholder="Loan Tenure (Years)"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={calculateEMI}
                        className="w-full bg-green-500 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                        Calculate EMI
                    </button>
                </motion.div>

                {emi !== null && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-6 p-4 bg-red-100 text-red-700 text-center font-semibold rounded-lg"
                    >
                        Your Monthly EMI: ₹{emi}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}
