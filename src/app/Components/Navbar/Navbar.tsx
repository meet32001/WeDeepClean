"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link
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
                <img src="/picturesofwebsite/WeDeepClean.png" alt="WeDeepClean Logo" className={styles.logo} />
            </div>

            {/* Menu Section */}
            <ul className={styles.menu}>
                <li><Link href="/" className={styles.menuItem}>HOME</Link></li>
                <li><Link href="/our-story" className={styles.menuItem}>OUR STORY</Link></li>
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
                                <Link href="/services/house-cleaning" onClick={handleItemClick}>
                                    House Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/condo-apartment-cleaning" onClick={handleItemClick}>
                                    Condo And Apartment Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/commercial-cleaning" onClick={handleItemClick}>
                                    Commercial Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/deep-cleaning" onClick={handleItemClick}>
                                    Deep Cleaning Service
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/move-in-move-out" onClick={handleItemClick}>
                                    Move In Move Out Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/eco-friendly-cleaning" onClick={handleItemClick}>
                                    Green And Eco-Friendly Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/post-renovation-cleaning" onClick={handleItemClick}>
                                    Post Renovation Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/cutlery-cleaning" onClick={handleItemClick}>
                                    Cutlery Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/cleaning-seniors" onClick={handleItemClick}>
                                    Cleaning Services For Seniors
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/spring-cleaning" onClick={handleItemClick}>
                                    Spring Cleaning
                                </Link>
                            </li>
                            <li className={styles.dropdownItem}>
                                <Link href="/services/seasonal-cleaning" onClick={handleItemClick}>
                                    Seasonal Cleaning
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    <Link href="" className={styles.menuItem}>
                        LOG IN
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;