"use client";

import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useRouter } from "next/navigation";
import styles from "./PartnerWithUs.module.css";

const PartnerWithUs: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [router]);

  const scrollToForm = () => {
    const formSection = document.getElementById("partnerWithUsForm");
    if (formSection) {
      const offset = -60; // Adjust for header height or any additional spacing
      const position =
        formSection.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.partnerContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.imageContainer}>
            <div className={styles.squareBackground}></div>
            <img
              src="/picturesofwebsite/partnership 1.png"
              alt="Partnership"
              className={styles.partnerImage}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>PARTNER WITH US</h1>
            <p className={styles.description}>
              Join hands with us to create lasting value and build a strong
              partnership that benefits your business. Whether you're looking
              for reliable cleaning services for your clients, office, or
              warehouse, we are here to collaborate with you and ensure
              excellence every step of the way. Together, we can achieve more
              and create a brighter future.
            </p>
            <button className={styles.signUpButton} onClick={scrollToForm}>
              Sign Up Today
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection} id="partnerWithUsForm">
          <h1 className={styles.title1}>Let's Bring Our Dream to Reality</h1>
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              {/* Input Groups */}
              <div className={styles.inputGroup}>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  className={styles.inputField}
                />
                <input
                  required
                  type="text"
                  placeholder="Your Contact Number"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputGroup}>
                <input
                  required
                  type="email"
                  placeholder="Your Email Address"
                  className={styles.inputField}
                />
                <input
                  required
                  type="text"
                  placeholder="Business Name"
                  className={styles.inputField}
                />
              </div>
              <div className={styles.inputGroup}>
                <select className={styles.inputField}>
                  <option style={{ fontWeight: "bold" }}>
                    Type of Business
                  </option>
                  <option>Real Estate</option>
                  <option>Corporate</option>
                  <option>Other</option>
                </select>
                <select className={styles.inputField}>
                  <option style={{ fontWeight: "bold" }}>
                    Cleaning Service Needed For
                  </option>
                  <option>Your Clients</option>
                  <option>Office</option>
                  <option>Warehouse</option>
                </select>
              </div>

              {/* Radio Group */}
              <p className={styles.question}>
                We'll create a custom discount code for your business. How many
                cleanings would you like it to be eligible for (per month)?
              </p>
              <div className={styles.radioGroup}>
                {["1-5", "5-10", "10-20", "Over 20", "Not sure"].map(
                  (value) => (
                    <label key={value}>
                      <input type="radio" name="cleanings" value={value} />{" "}
                      {value}
                    </label>
                  )
                )}
              </div>

              {/* Textarea */}
              <textarea
                required
                placeholder="Final Notes: How will cleaning service benefit your business? Any specific needs?"
                className={styles.textArea}
              ></textarea>

              {/* Recaptcha */}
              <div className={styles.recaptcha}>
                <input
                  type="checkbox"
                  required
                  style={{ fontWeight: "bold" }}
                />{" "}
                I'm not a robot
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitButton}>
                Partner with Us
              </button>
            </form>

            {/* Side Image */}
            <div className={styles.imageContainer1}>
              <div className={styles.squareBackground1}></div>
              <img
                src="/picturesofwebsite/partnership 2.png"
                alt="Working on Laptop"
                className={styles.image1}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PartnerWithUs;