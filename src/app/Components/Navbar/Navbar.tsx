"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className={`${styles.navbar}`}>
      {/* Logo Section */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            src="/picturesofwebsite/WeDeepClean.png"
            alt="WeDeepClean Logo"
            className={styles.logo}
          />
        </Link>
      </div>

      {/* Menu Section */}
      <ul className={styles.menu}>
        <li>
          <a href="/" className={styles.menuItem}>
            HOME
          </a>
        </li>
        <li>
          <a href="#our-story" className={styles.menuItem}>
            OUR STORY
          </a>
        </li>
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
                <Link
                  href="/services/condo-apartment-cleaning"
                  onClick={handleItemClick}
                >
                  Deep House Cleaning
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/services/commercial-cleaning"
                  onClick={handleItemClick}
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/services/move-in-move-out"
                  onClick={handleItemClick}
                >
                  Move In Move Out Cleaning
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/services/post-renovation-cleaning"
                  onClick={handleItemClick}
                >
                  Post Renovation Cleaning
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/services/cleaning-seniors"
                  onClick={handleItemClick}
                >
                  Cleaning Services For Seniors
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/services/seasonal-cleaning"
                  onClick={handleItemClick}
                >
                  Seasonal Cleaning
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/LoginPage" className={styles.menuItem}>
            LOG IN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
