"use client";

import React from "react";
import styles from "./RecurringCleaning.module.css";

// Define CalendarIcon component with customizable filled cells
const CalendarIcon = ({ filledCells = [] }: { filledCells?: { x: number; y: number }[] }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#14532d"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer Rectangle */}
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="#14532d"></rect>

    {/* Calendar Header */}
    <line x1="16" y1="2" x2="16" y2="6" stroke="#14532d"></line>
    <line x1="8" y1="2" x2="8" y2="6" stroke="#14532d"></line>
    <line x1="3" y1="10" x2="21" y2="10" stroke="#14532d"></line>

    {/* Calendar Rows and Columns */}
    {Array.from({ length: 3 }).map((_, row) =>
      Array.from({ length: 4 }).map((_, col) => {
        const isFilled = filledCells.some((cell) => cell.x === col && cell.y === row);
        return (
          <rect
            key={`${row}-${col}`}
            x={4.5 + col * 4}
            y={11.5 + row * 3.5}
            width="3"
            height="2.5"
            stroke="#14532d"
            strokeWidth="0.5"
            fill={isFilled ? "#00AA00" : "#FFFFFF"}
          />
        );
      })
    )}
  </svg>
);

const RecurringCleaning: React.FC = () => {
  const cleaningOptions = [
    { title: "On Demand Cleaning", discount: "", icon: <CalendarIcon /> },
    {
      title: "Monthly Cleaning",
      discount: "10% OFF",
      icon: (
        <CalendarIcon
          filledCells={[
            { x: 1, y: 1 }, // One green cell
          ]}
        />
      ),
    },
    {
      title: "Bi-Weekly Cleaning",
      discount: "15% OFF",
      icon: (
        <CalendarIcon
          filledCells={[
            { x: 1, y: 1 }, // First green cell
            { x: 1, y: 0 }, // Second green cell
          ]}
        />
      ),
    },
    {
      title: "Weekly Cleaning",
      discount: "20% OFF",
      icon: (
        <CalendarIcon
          filledCells={[
            { x: 1, y: 0 }, // First green cell
            { x: 1, y: 1 }, // Second green cell
            { x: 1, y: 2 }, // Third green cell
          ]}
        />
      ),
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
              <div className={styles.icon}>{option.icon}</div>
              <div className={styles.cardText}>
                <span className={styles.optionTitle}>{option.title}</span>
                {option.discount && (
                  <span className={styles.discount}>{option.discount}</span>
                )}
              </div>
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