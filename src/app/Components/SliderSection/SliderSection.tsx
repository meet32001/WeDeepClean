"use client";

import React, { useState } from "react";
import styles from "./SliderSection.module.css";

const slides = [
  {
    title: "Seasonal Cleaning",
    description:
      "Keep your home fresh and clean all year round with our seasonal cleaning services. Perfect for Winter, Spring, Fall, or holiday prep.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
  },
  {
    title: "Home Deep Cleaning",
    description:
      "Experience a thorough and detailed cleaning that reaches every corner of your home for a truly pristine result.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
  },
  {
    title: "Move-In/Out Cleaning",
    description:
      "Ease the stress of moving with our specialized cleaning services for new or old homes. Leave it spotless!",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
  },
  {
    title: "Post-Renovation Cleaning",
    description:
      "Clear away dust and debris with our expert post-renovation cleaning, leaving your home sparkling and ready to enjoy.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
  },
  {
    title: "Cleaning for Seniors",
    description:
      "Compassionate cleaning services designed to help seniors maintain a safe, clean, and comfortable living environment.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Create a professional and clean environment for your business with our customizable commercial cleaning solutions.",
    image: "/picturesofwebsite/hero_page_slider.png",
    buttonText: "Book Service",
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
