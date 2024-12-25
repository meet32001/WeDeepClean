"use client";

import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <img
            src="/images/logo.png" // Replace with your logo path
            alt="WeDeepClean Logo"
            className={styles.logo}
          />
          <p className={styles.brandDescription}>
            Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem
            lorem sit sed elitr sit no, sed kasd et ipsum dolor duo dolor.
          </p>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Join Our Team</li>
            <li>Reviews</li>
            <li>Partnership</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Get In Touch</h3>
          <p>123 Street, New York, USA</p>
          <p>+012 345 67890</p>
          <p>info@example.com</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2024 All Rights Reserved</p>
        <div className={styles.socialIcons}>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;