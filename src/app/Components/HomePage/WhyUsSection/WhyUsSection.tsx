"use client";

import React, { useState } from "react";
import styles from "./WhyUsSection.module.css";

const WhyUsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: "Quality Cleaning",
            description: "Lorem ipsum odor amet, consectetur adipiscing elit.",
            icon: "/quality-cleaning-icon.svg", // Replace with your icon path
        },
        {
            title: "Insured & Vetted",
            description: "Lorem ipsum odor amet, consectetur adipiscing elit.",
            icon: "/insured-icon.svg", // Replace with your icon path
        },
        {
            title: "Flexible Scheduling",
            description: "Lorem ipsum odor amet, consectetur adipiscing elit.",
            icon: "/flexible-scheduling-icon.svg", // Replace with your icon path
        },
        {
            title: "Affordable Pricing",
            description: "Lorem ipsum odor amet, consectetur adipiscing elit.",
            icon: "/affordable-pricing-icon.svg", // Replace with your icon path
        },
        {
            title: "Customer Satisfaction",
            description: "Lorem ipsum odor amet, consectetur adipiscing elit.",
            icon: "/customer-satisfaction-icon.svg", // Replace with your icon path
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + items.length) % items.length
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
                            <div className={styles.itemIcon}>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <h3 className={styles.itemTitle}>{item.title}</h3>
                            <p className={styles.itemDescription}>
                                {item.description}
                            </p>
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