import styles from "./RecurringCleaning.module.css";

const RecurringCleaning = () => {
    return (
        <section className={styles.recurringSection}>
            {/* Heading */}
            <h2 className={styles.heading}>
                Book a Recurring Cleaning and Save Time and Money!
            </h2>

            {/* Background Image Container */}
            <div className={styles.backgroundImage}>
                {/* Left Arrow */}
                <button className={`${styles.arrow} ${styles.leftArrow}`}>
                    &#10094;
                </button>

                {/* Cards Container */}
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <h3>On Demand Cleaning</h3>
                    </div>
                    <div className={styles.card}>
                        <h3>Monthly Cleaning (10% OFF)</h3>
                    </div>
                    <div className={styles.card}>
                        <h3>Bi-Weekly Cleaning (15% OFF)</h3>
                    </div>
                    <div className={styles.card}>
                        <h3>Weekly Cleaning (20% OFF)</h3>
                    </div>
                </div>

                {/* Right Arrow */}
                <button className={`${styles.arrow} ${styles.rightArrow}`}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default RecurringCleaning;