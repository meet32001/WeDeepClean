"use client";

import React from "react";
import styles from "./Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FooterSection: React.FC = () => {
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
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
            lorem sit sed elitr sit no, sed kasd et ipsum dolor duo dolor.
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
            <li>
              <a href="#">
                <i className="fas fa-chevron-right"></i> Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chevron-right"></i> Privacy Policy
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chevron-right"></i> Join Our Team
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chevron-right"></i> Reviews
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-chevron-right"></i> Partnership
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div className={styles.contactSection}>
          <h4 className={styles.sectionTitle}>Get In Touch</h4>
          <p>
            Dolor clita stet nonumy clita diam vero, et et ipsum diam labore
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA
          </p>
          <p>
            <i className="fas fa-phone"></i> +012 345 67890
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@example.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
