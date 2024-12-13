"use client";

import { useState, useEffect } from "react";
import heroStyles from "./HeroSection.module.css";

type Offer = {
    title: string;
    subtitle: string;
    image: string;
    buttons: {
        text: string;
        action: string;
    }[];
};

const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const offers: Offer[] = [
        {
            title: "Detailed & Trusted Cleaning Service",
            subtitle: "Leave the house cleaning chores to us",
            image: "/Cleaner.webp",
            buttons: [
                { text: "Book Service", action: "/book-service" },
                { text: "Contact Us", action: "/contact" },
            ],
        },
    ];

    const currentOffer = offers[currentSlide];

    useEffect(() => {
        if (offers.length > 1) {
            const sliderInterval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % offers.length);
            }, 5000);

            return () => clearInterval(sliderInterval);
        }
    }, [offers]);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % offers.length);
    };

    return (
        <section className={heroStyles.heroSection}>
            {/* Left Content */}
            <div className={heroStyles.leftContent}>
                <h1 className={heroStyles.title}>{currentOffer.title}</h1>
                <p className={heroStyles.subtitle}>{currentOffer.subtitle}</p>
                <div className={heroStyles.buttonContainer}>
                    {currentOffer.buttons.map((button, index) => (
                        <button
                            key={index}
                            className={
                                index === 0
                                    ? heroStyles.bookButton
                                    : heroStyles.contactButton
                            }
                            onClick={() => (window.location.href = button.action)}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content */}
            <div className={heroStyles.rightContent}>
                <div className={heroStyles.backgroundEllipse}></div>
                <img
                    src={currentOffer.image}
                    alt={currentOffer.title}
                    className={heroStyles.heroImage}
                />
            </div>

            {/* Slider Arrows */}
            {offers.length > 1 && (
                <>
                    <button
                        className={`${heroStyles.arrow} ${heroStyles.leftArrow}`}
                        onClick={handlePrevSlide}
                    >
                        &#10094;
                    </button>
                    <button
                        className={`${heroStyles.arrow} ${heroStyles.rightArrow}`}
                        onClick={handleNextSlide}
                    >
                        &#10095;
                    </button>
                </>
            )}
        </section>
    );
};

export default HeroSection;