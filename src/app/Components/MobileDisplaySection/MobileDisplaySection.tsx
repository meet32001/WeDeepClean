"use client";

import React from "react";
import styles from "./MobileDisplay.module.css";

const CleaningServiceSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side: Text */}
        <div className={styles.textContainer}>
          <p className={styles.highlightText}>Experience Hassle-Free Cleaning Services</p>
          <h1 className={styles.title}>
            Book Your Cleaning Service in less than 1 minute!
          </h1>
          <ul className={styles.benefitsList}>
            <li>⭐ Create a personalized cleaning plan that fits your lifestyle. ⭐</li>
            <li>⭐ Transparent pricing upfront—no hidden fees or surprises. ⭐</li>
            <li>⭐ Secure payment with no charges until the service is complete. ⭐</li>
            <li>⭐ Trained, vetted, and insured professionals you can trust. ⭐</li>
            <li>
              ⭐ 24/7 customer support via phone, live chat, email, and more. ⭐
            </li>
            <li>
              ⭐ <span className={styles.highlight}>Seamless online booking</span> to make scheduling quick and easy. ⭐
            </li>
            <li>⭐ Helpful reminders—stay updated with 3-day and 1-day appointment alerts. ⭐</li>
            <li>
              ⭐ <span className={styles.highlight}>Satisfaction guaranteed</span>—we clean until you're completely happy. ⭐
            </li>
          </ul>
        </div>

        {/* Right Side: Image */}
        <div className={styles.imageContainer}>
          <img
            src="/picturesofwebsite/mobile.jpg"
            alt="Phone Mockup"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default CleaningServiceSection;