"use client";

import React from "react";
import styles from "./ReviewSection.module.css";

const ReviewSection: React.FC = () => {
  const masonryItems = Array(10).fill(null);

  const videos = [
    "https://www.youtube.com/embed/dummy1", // Replace with actual YouTube video links
    "https://www.youtube.com/embed/dummy2",
    "https://www.youtube.com/embed/dummy3",
    "https://www.youtube.com/embed/dummy4",
  ];

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.title}>Client Reviews</h2>
      <div className={styles.videoContainer}>
        {videos.map((video, index) => (
          <div className={styles.videoCard} key={index}>
            <iframe>
              className={styles.video}
              src={video}
              title={`Client Review ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            </iframe>
          </div>
        ))}
      </div>
      <h2 className={styles.title1}>Additional Reviews</h2>
      {/* Masonry Section */}
      <div className={styles.masonryContainer}>
        {masonryItems.map((_, index) => (
          <div
            key={index}
            className={`${styles.masonryItem} ${
              styles[`masonryItem${index + 1}`]
            }`}
          >
          </div>
        ))}
      </div>
      <div className={styles.videoContainer}>
        {videos.map((video, index) => (
          <div className={styles.videoCard} key={index}>
            <iframe>
              className={styles.video}
              src={video}
              title={`Client Review ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            </iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
