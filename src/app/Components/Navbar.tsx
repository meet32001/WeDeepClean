"use client"; // Add this at the top

import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null); // Updated type to HTMLLIElement

    // Detect clicks outside the dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleItemClick = () => {
        setIsDropdownOpen(false); // Close the dropdown when an item is clicked
    };

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between py-3 px-20 shadow-md bg-white">
            {/* Logo Section */}
            <div className="flex items-center">
                <img 
                    src="/Logo.jpeg" 
                    alt="WeDeepClean Logo" 
                    className="h-16 w-auto" // Adjust logo size
                />
            </div>

            {/* Menu Section */}
            <ul className="flex space-x-10 text-lg font-light text-gray-800">
                <li><a href="/" className="hover:text-green-600">HOME</a></li>
                <li><a href="/our-story" className="hover:text-green-600">OUR STORY</a></li>
                <li className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center hover:text-green-600 focus:outline-none"
                    >
                        SERVICES
                        <span className="ml-1">▼</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <ul className="absolute mt-2 w-64 bg-white border border-gray-200 shadow-lg z-50">
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/house-cleaning" onClick={handleItemClick}>
                                    House Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/condo-apartment-cleaning" onClick={handleItemClick}>
                                    Condo And Apartment Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/commercial-cleaning" onClick={handleItemClick}>
                                    Commercial Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/deep-cleaning" onClick={handleItemClick}>
                                    Deep Cleaning Service
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/move-in-move-out" onClick={handleItemClick}>
                                    Move In Move Out Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/eco-friendly-cleaning" onClick={handleItemClick}>
                                    Green And Eco-Friendly Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/post-renovation-cleaning" onClick={handleItemClick}>
                                    Post Renovation Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/cutlery-cleaning" onClick={handleItemClick}>
                                    Cutlery Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/cleaning-seniors" onClick={handleItemClick}>
                                    Cleaning Services For Seniors
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/spring-cleaning" onClick={handleItemClick}>
                                    Spring Cleaning
                                </a>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                <a href="/services/seasonal-cleaning" onClick={handleItemClick}>
                                    Seasonal Cleaning
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
                <li><a href="/login" className="hover:text-green-600">LOG IN</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;