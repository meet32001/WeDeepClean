"use client";

import storyStyles from "./OurStory.module.css";

const OurStory: React.FC = () => {
    return (
        <section className={storyStyles.ourStorySection}>
            {/* Left Image */}
            <div className={storyStyles.imageContainer}>
                <div className={storyStyles.imageBackground}></div>
                {/* <img
                    src="/Logo.jpeg" // Replace with your actual image path
                    alt="Our Story"
                    className={storyStyles.storyImage}
                /> */}
            </div>

            {/* Right Content */}
            <div className={storyStyles.contentContainer}>
                <h2 className={storyStyles.title}>
                    A Cleaning Company that puts people first
                </h2>
                <p className={storyStyles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec pretium mi. Curabitur facilisis ornare velit
                    non vulputate. Aliquam metus tortor, auctor id gravida
                    condimentum, viverra quis sem.
                </p>
                <p className={storyStyles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur facilisis ornare velit non vulputate. Aliquam
                    metus tortor, auctor id gravida condimentum, viverra quis
                    sem.
                </p>
                <button className={storyStyles.learnMoreButton}>
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default OurStory;