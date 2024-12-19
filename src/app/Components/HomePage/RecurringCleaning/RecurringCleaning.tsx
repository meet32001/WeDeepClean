"use client";

import React from "react";
import styles from "./RecurringCleaning.module.css";

const RecurringCleaning: React.FC = () => {
    const cleaningOptions = [
        {
            title: "On Demand Cleaning",
            icon: "/calendar-icon.svg", // Replace with your icon path
        },
        {
            title: "Monthly Cleaning (10% OFF)",
            icon: "/calendar-icon.svg",
        },
        {
            title: "Bi - Weekly Cleaning (15% OFF)",
            icon: "/calendar-icon.svg",
        },
        {
            title: "Weekly Cleaning (20% OFF)",
            icon: "/calendar-icon.svg",
        },
    ];

    return (
        <section className={styles.recurringSection}>
            <h2 className={styles.title}>
                Book a Recurring Cleaning and Save Time and Money!
            </h2>
            <div className={styles.optionsContainer}>
                {cleaningOptions.map((option, index) => (
                    <React.Fragment key={index}>
                        {/* Individual Card */}
                        <div className={styles.optionCard}>
                            <img
                                src={option.icon}
                                alt={option.title}
                                className={styles.icon}
                            />
                            <h3 className={styles.optionTitle}>
                                {option.title}
                            </h3>
                        </div>

                        {/* Arrow between cards, except after the last one */}
                        {index < cleaningOptions.length - 1 && (
                            <div className={styles.arrow}>
                                &#8594; {/* HTML Entity for Right Arrow */}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default RecurringCleaning;