"use client";

import React, { useState } from "react";
import styles from "./WhyUsSection.module.css";

// SVG Component for "Quality Cleaning"
const QualityCheckedIcon = () => (
  <svg
    width="65"
    height="67"
    viewBox="0 0 65 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      width="65"
      height="67"
      fill="url(#pattern0_232_215)"
      fillOpacity="0.7"
    />
    <defs>
      <pattern
        id="pattern0_232_215"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_232_215"
          transform="matrix(0.01 0 0 0.00970149 0 0.0149254)"
        />
      </pattern>
      <image
        id="image0_232_215"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const InsuredVettedIcon = () => (
  <svg
    width="65"
    height="67"
    viewBox="0 0 65 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48 29h-4V16a12 12 0 0 0-24 0v13H16a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V33a4 4 0 0 0-4-4M24 16a8 8 0 0 1 16 0v13H24Zm24 40H16V33h32Z"
      fill="#333333" /* Darker color for the icon */
    />
  </svg>
);

const FlexibleSchedulingIcon = () => (
  <svg
    width="65"
    height="67"
    viewBox="0 0 65 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect
      width="65"
      height="67"
      fill="url(#pattern0_232_199)" /* Pattern Background */
      fillOpacity="0.7" /* Opacity for better aesthetics */
    />
    <defs>
      <pattern
        id="pattern0_232_199"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_232_199"
          transform="matrix(0.01 0 0 0.00970149 0 0.0149254)"
        />
      </pattern>
      <image
        id="image0_232_199"
        width="100"
        height="100"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYUlEQVR4nO2dwW7iMBRF73eUNWt+uyxQ+aqhVVVpqJj1G0VKF0CTOIHE18450tsARs/3+BlBF5XmYSvpIOlbUtxU89he0ka+bAvv/24zX79s5LY+TTe1Lbz/Ow4Jm/mpV/lxKLz/O34b8676Kz++C+//jtumxz6fm9L7r25DUXj/1W0oCu+/ug2FY/87SUdJ7yM+4LpqaEPudcuj73dqs20yTqJ54cV4Q1G4kJ+6pEo5FrKhKFxIU28pQp5xTSFESdl8pAgZCvTR9Y++/9zM3f/o9QgRQpwIhHgRtQk5F/7j3Hnm/hcXsi/85+v9zP0vLmTT/vFmaDPNa17kx2bm/hcXorbR147xP7fPOcpYov8sQqAbhJiBEDMQYgZCzEBIbUIozZoBQuR1yBCi/BIQooqEwHNBiBkIMQMhZiDEDISYgRAzELJ2Ibm/aIXbF7tH80WIEJL7lAcTkj/IWKsQ1l2DEJODM3k9E9IPQiq5IievZ0L6QcgATEglAQVXlldAgRCvgAIhXgHFWoXUXmNBiBCS/dQGE9I9krVXcVcW665BiMnBmbyeCekHIZVckZPXMyH9IGQAJqSSgIIryyugQIhXQIEQr4BirUJqr7EgRAjJfmqDCekeydqruCuLddcgxOTgTF7PhPSDkEquyMnrmZB+EDIAE1JJQMGV5RVQIMQroECIV0CxViG111gQIoRkP7XBhHSPZO1lf2VBPwgxAyFmIMQMhJiBEDMQYgZCShfy7H9wT6kzgz8pQo6EqKUO0VuKkJ2kC1I0t4x/bdZJ7Fp7J8To2SJObbbJMgAAAJTAf2q8sBVsGz4tAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

const AffordablePricingIcon = () => (
    <svg
      width="65"
      height="67"
      viewBox="0 0 65 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Coin Shape */}
      <circle cx="32.5" cy="33.5" r="20" stroke="black" strokeWidth="2" />
      {/* Dollar Symbol */}
      <path
        d="M33.5 25v17M28 28h9c2 0 3 2 3 3s-1 3-3 3h-7c-2 0-3 2-3 3s1 3 3 3h9"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const CustomerSatisfactionIcon = () => (
  <svg
    width="65"
    height="67"
    viewBox="0 0 65 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Circle */}
    <circle
      cx="32.5"
      cy="33.5"
      r="30"
      stroke="black"
      strokeWidth="4"
      fill="none"
    />
    {/* Eyes */}
    <circle cx="25" cy="30" r="2.5" fill="black" />
    <circle cx="40" cy="30" r="2.5" fill="black" />

    {/* Smile */}
    <path
      d="M28 39c2.5 3.5 7 2.5 9.5 1.5"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const WhyUsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: "Quality Cleaning",
      description: "Experience top-notch cleaning services with attention to detail.",
      icon: <QualityCheckedIcon />, // Replace icon with the new SVG Component
    },
    {
      title: "Insured & Vetted",
      description: "Our team is fully insured and rigorously vetted for your peace of mind.",
      icon: <InsuredVettedIcon />, // Another icon
    },
    {
      title: "Flexible Scheduling",
      description: "We work around your schedule to make cleaning hassle-free.",
      icon: <FlexibleSchedulingIcon />, // Another icon
    },
    {
      title: "Affordable Pricing",
      description: "Premium cleaning services at prices that fit your budget.",
      icon: <AffordablePricingIcon />, // Another icon
    },
    {
      title: "Customer Satisfaction",
      description: "Your happiness is our top priority in every cleaning job.",
      icon: <CustomerSatisfactionIcon />, // Another icon
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getPosition = (index: number) => {
    const totalItems = items.length;
    const relativeIndex = (index - currentIndex + totalItems) % totalItems;

    if (relativeIndex === 0) return styles.leftItem; // Left position
    if (relativeIndex === 1) return styles.activeItem; // Center position
    if (relativeIndex === 2) return styles.rightItem; // Right position

    return styles.hiddenItem; // Hidden for all other items
  };

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.title}>Why Us?</h2>
      <div className={styles.sliderContainer}>
        {/* Left Arrow */}
        <button
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={handlePrev}
        >
          &#10094;
        </button>

        {/* Slider Items */}
        <div className={styles.slider}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.sliderItem} ${getPosition(index)}`}
            >
              <div className={styles.itemIcon}>{item.icon}</div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default WhyUsSlider;
