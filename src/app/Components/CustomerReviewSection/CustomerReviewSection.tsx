"use client";

import React from "react";
import styles from "./CustomerReviewSection.module.css";

const CustomerReviewSection: React.FC = () => {
  const reviews = [
    { id: 1, videoUrl: "https://www.youtube.com/embed/VIDEO_ID1" },
    { id: 2, videoUrl: "https://www.youtube.com/embed/VIDEO_ID2" },
    { id: 3, videoUrl: "https://www.youtube.com/embed/VIDEO_ID3" },
    { id: 4, videoUrl: "https://www.youtube.com/embed/VIDEO_ID4" },
  ];

  return (
    <section className={styles.reviewSection}>
      <h2 className={styles.title}>Customer Reviews of Our Cleaning Services</h2>
      <div className={styles.reviewsContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <iframe
              className={styles.video}
              src={review.videoUrl}
              title={`Client Review ${review.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <button className={styles.viewMoreButton}>View More Reviews</button>
    </section>
  );
};

export default CustomerReviewSection;