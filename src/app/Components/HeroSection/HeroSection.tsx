"use client";

import { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const offers = [
        {
            title: "Detailed & Trusted Cleaning Service",
            subtitle: "Leave the house cleaning chores to us",
            image: "/Logo.jpeg",
            buttons: [
                { text: "Book Service", action: "/book-service" },
                { text: "Contact Us", action: "/contact" },
            ],
        },
        // {
        //     title: "Special Discount on Spring Cleaning",
        //     subtitle: "Get 20% off on your first spring cleaning service!",
        //     image: "/DiscountOffer.jpeg",
        //     buttons: [
        //         { text: "Claim Offer", action: "/claim-offer" },
        //         { text: "Learn More", action: "/learn-more" },
        //     ],
        // },
    ];

    const currentOffer = offers[currentSlide];

    // Automatic slider
    useEffect(() => {
        if (offers.length > 1) {
            const sliderInterval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % offers.length);
            }, 5000); // Change slide every 5 seconds

            return () => clearInterval(sliderInterval); // Cleanup on unmount
        }
    }, [offers]);

    // Navigate slider
    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % offers.length);
    };

    return (
        <section className={`${styles.heroSection}`}>
            {/* Left Content */}
            <div className={`${styles.leftContent}`}>
                <h1 className={`${styles.title}`}>{currentOffer.title}</h1>
                <p className={`${styles.subtitle}`}>{currentOffer.subtitle}</p>
                {/* Buttons */}
                <div className={`${styles.buttonContainer}`}>
                    {currentOffer.buttons.map((button, index) => (
                        <button
                            key={index}
                            className={
                                index === 0
                                    ? `${styles.bookButton}`
                                    : `${styles.contactButton}`
                            }
                            onClick={() => (window.location.href = button.action)}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Content */}
            <div className={`${styles.rightContent}`}>
                {/* Decorative Background Ellipse */}
                <div className={`${styles.backgroundEllipse}`}></div>

                {/* Image */}
                <img
                    src={currentOffer.image}
                    alt={currentOffer.title}
                    className={`${styles.heroImage}`}
                />
            </div>

            {/* Slider Arrows */}
            {offers.length > 1 && (
                <>
                    <button
                        className={`${styles.arrow} ${styles.leftArrow}`}
                        onClick={handlePrevSlide}
                    >
                        &#10094;
                    </button>
                    <button
                        className={`${styles.arrow} ${styles.rightArrow}`}
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