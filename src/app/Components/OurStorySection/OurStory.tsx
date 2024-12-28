"use client";

import storyStyles from "./OurStory.module.css";

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className={storyStyles.ourStorySection}>
      {/* Left Image */}
      <div className={storyStyles.imageContainer}>
        <div className={storyStyles.imageBackground}></div>
        <img
          src="/Cleaner.webp" // Replace with your actual image path
          alt="Our Story"
          className={storyStyles.storyImage}
        />
      </div>

      {/* Right Content */}
      <div className={storyStyles.contentContainer}>
        <h2 className={storyStyles.title}>
          A Cleaning Company that puts people first
        </h2>
        <p className={storyStyles.paragraph}>
          At WeDeepClean, our journey began with a single mission: to create
          cleaner, healthier spaces for the people we serve. Our founder noticed
          something remarkable while helping a friend prepare their home for a
          family gathering — the joy and relief that came from stepping into a
          freshly cleaned space. It wasn’t just about cleanliness; it was about
          transforming a house into a home and a workplace into a sanctuary.
        </p>
        <p className={storyStyles.paragraph}>
          Driven by the belief that every person deserves to feel proud of their
          space, we built WeDeepClean from the ground up. From our first client
          — a small business owner who needed their office refreshed for an
          important presentation — to the countless homes and businesses we
          serve today, we’ve always stayed true to our core value: people come
          first.
        </p>
        <button className={storyStyles.learnMoreButton}>Learn More</button>
      </div>
    </section>
  );
};

export default OurStory;
