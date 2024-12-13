"use client";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={`${styles.heroSection}`}>
            {/* Left Content */}
            <div className={`${styles.leftContent}`}>
                <h1 className={`${styles.title}`}>
                    Detailed & Trusted <br /> Cleaning Service
                </h1>
                <p className={`${styles.subtitle}`}>
                    Leave the house cleaning chores to us
                </p>
                {/* Buttons */}
                <div className={`${styles.buttonContainer}`}>
                    <button className={`${styles.bookButton}`}>
                        Book Service
                    </button>
                    <button className={`${styles.contactButton}`}>
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Right Content */}
            <div className={`${styles.rightContent}`}>
                {/* Decorative Background Ellipse */}
                <div className={`${styles.backgroundEllipse}`}></div>

                {/* Image (Uncomment and replace the path with your image) */}
                <img
                    src="/Logo.jpeg"
                    alt="Cleaning Service"
                    className={`${styles.heroImage}`}
                />
            </div>
        </section>
    );
};

export default HeroSection;