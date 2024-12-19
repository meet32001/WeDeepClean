"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css"; // Import the CSS module

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

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
        <nav className={`${styles.navbar}`}>
            {/* Logo Section */}
            <div className={styles.logoContainer}>
                <img 
                    src="" 
                    alt="WeDeepClean Logo" 
                    className={styles.logo} 
                />
            </div>

            {/* Menu Section */}
            <ul className={styles.menu}>
                <li><a href="/" className={styles.menuItem}>HOME</a></li>
                <li><a href="/our-story" className={styles.menuItem}>OUR STORY</a></li>
                <li className={`${styles.dropdown} relative`} ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`${styles.menuItem} flex items-center`}
                    >
                        SERVICES
                        <span className={styles.dropdownArrow}>▼</span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <li className={styles.dropdownItem}>
                                <a href="/services/house-cleaning" onClick={handleItemClick}>
                                    House Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/condo-apartment-cleaning" onClick={handleItemClick}>
                                    Condo And Apartment Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/commercial-cleaning" onClick={handleItemClick}>
                                    Commercial Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/deep-cleaning" onClick={handleItemClick}>
                                    Deep Cleaning Service
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/move-in-move-out" onClick={handleItemClick}>
                                    Move In Move Out Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/eco-friendly-cleaning" onClick={handleItemClick}>
                                    Green And Eco-Friendly Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/post-renovation-cleaning" onClick={handleItemClick}>
                                    Post Renovation Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/cutlery-cleaning" onClick={handleItemClick}>
                                    Cutlery Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/cleaning-seniors" onClick={handleItemClick}>
                                    Cleaning Services For Seniors
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/spring-cleaning" onClick={handleItemClick}>
                                    Spring Cleaning
                                </a>
                            </li>
                            <li className={styles.dropdownItem}>
                                <a href="/services/seasonal-cleaning" onClick={handleItemClick}>
                                    Seasonal Cleaning
                                </a>
                            </li>
                        </ul>
                    )}
                </li>
                <li><a href="/login" className={styles.menuItem}>LOG IN</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;