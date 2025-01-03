"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FooterSection: React.FC = () => {
  const router = useRouter();

  // Navigation functions for each page
  const navigateToTerms = () => router.push("/TermsAndConditions");
  const navigateToPrivacy = () => router.push("/PrivacyPolicy");
  const navigateToJoinTeam = () => router.push("/JoinOurTeam");
  const navigateToReviews = () => router.push("/ReviewPage");
  const navigateToPartnership = () => router.push("/PartnerWithUs");

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <img
              src="/picturesofwebsite/weDeepClean.png"
              alt="WeDeepClean Logo"
            />
          </div>
          <p className={styles.description}>
            WeDeepClean provides premium cleaning services for homes and
            businesses, ensuring spotless spaces and customer satisfaction. Your
            space, our priority.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className={styles.copyright}>
            Copyright © 2025 WeDeepClean – All Rights Reserved
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linksSection}>
          <h4 className={styles.sectionTitle}>Quick Links</h4>
          <ul>
            <li onClick={navigateToTerms} style={{ cursor: "pointer" }}>
              <i className="fas fa-chevron-right"></i> Terms & Conditions
            </li>
            <li onClick={navigateToPrivacy} style={{ cursor: "pointer" }}>
              <i className="fas fa-chevron-right"></i> Privacy Policy
            </li>
            <li onClick={navigateToJoinTeam} style={{ cursor: "pointer" }}>
              <i className="fas fa-chevron-right"></i> Join Our Team
            </li>
            <li onClick={navigateToReviews} style={{ cursor: "pointer" }}>
              <i className="fas fa-chevron-right"></i> Reviews
            </li>
            <li onClick={navigateToPartnership} style={{ cursor: "pointer" }}>
              <i className="fas fa-chevron-right"></i> Partnership
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className={styles.contactSection}>
          <h4 className={styles.sectionTitle}>Get In Touch</h4>
          <p>Have questions or need assistance? We’re here to help!</p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA
          </p>
          <p>
            <i className="fas fa-phone"></i> +1-234-567-890
          </p>
          <p>
            <i className="fas fa-envelope"></i> hello@wedeepclean.ca
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;