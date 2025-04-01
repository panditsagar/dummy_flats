import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [selectedType, setSelectedType] = useState('Type');
    const [keywords, setKeywords] = useState('');
    const [showTypeDropdown, setShowTypeDropdown] = useState(false);

    const propertyTypes = [
        'Type',
        'Apartment',
        'House',
        'Villa',
        'Condo',
        'Office',
        'Land'
    ];

    const handleSearch = () => {
        console.log('Searching for:', { type: selectedType, keywords });
        // Add your search logic here
    };

    return (
        <div className="w-full bg-green-200 py-4 px-2 sm:px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-full shadow-md flex flex-wrap sm:flex-nowrap items-center justify-between p-2">
                {/* Type Dropdown */}
                <div className="relative w-full sm:w-auto">
                    <button
                        onClick={() => setShowTypeDropdown(!showTypeDropdown)}
                        className="px-4 py-2 text-gray-700 flex items-center justify-between w-full sm:w-[120px] rounded-lg border border-gray-300 bg-white"
                    >
                        <span>{selectedType}</span>
                        <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    {showTypeDropdown && (
                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-full sm:w-[120px]">
                            {propertyTypes.map((type) => (
                                <div
                                    key={type}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                                    onClick={() => {
                                        setSelectedType(type);
                                        setShowTypeDropdown(false);
                                    }}
                                >
                                    {type}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Divider (Hidden on Small Screens) */}
                <div className="hidden sm:block h-6 w-px bg-gray-300 mx-2" />

                {/* Keywords Input */}
                <input
                    type="text"
                    placeholder="Enter Keywords"
                    className="flex-grow px-4 py-2 focus:outline-none text-gray-700 rounded-lg border border-gray-300 w-full sm:w-auto mt-2 sm:mt-0"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />

                {/* Filters Button (Hidden on Small Screens) */}
                <button className="hidden sm:block px-6 py-2 text-gray-700 hover:text-gray-900 font-medium mr-1">
                    Filters
                </button>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center w-full sm:w-auto mt-2 sm:mt-0"
                >
                    <Search className="mr-2 w-5 h-5" />
                    <span>Search</span>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;