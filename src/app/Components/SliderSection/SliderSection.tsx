"use client";

import React, { useState } from "react";
import styles from "./SliderSection.module.css";

const slides = [
  {
    title: "Seasonal Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim tincidunt, accumsan erat nisi, non eu lacus ligula. Curabitur euismod enim sed tellus ornare, vitae facilisis mauris luctus. Curare ridiculus at laoreet massa pellentesque tristique.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
  },
  {
    title: "Weekly Cleaning",
    description:
      "Weekly cleaning services tailored to your needs, ensuring a spotless home every time.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Learn More",
  },
  {
    title: "Monthly Cleaning",
    description:
      "Save time and money with our monthly cleaning services. Book now to experience the difference!",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Now",
  },
  {
    title: "Deep Cleaning",
    description:
      "Thorough and detailed cleaning for every nook and cranny of your home.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Get Started",
  },
  {
    title: "Move-In/Out Cleaning",
    description:
      "Perfect cleaning solutions when moving into a new home or leaving the old one.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Contact Us",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className={styles.sliderSection}>
      <div className={styles.slider}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
        ></div>
        <div className={styles.content}>
          <div className={styles.contentContainer}>
            <h2 className={styles.title}>{slides[currentIndex].title}</h2>
            <p className={styles.description}>
              {slides[currentIndex].description}
            </p>
            <button className={styles.bookButton}>
              {slides[currentIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Arrows */}
        <button className={styles.prevArrow} onClick={handlePrev}>
          &#8592;
        </button>
        <button className={styles.nextArrow} onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Slider;