import React from "react";
import styles from "./RegistrationPage.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const RegistrationPage: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.registrationContainer}>
        <div className={styles.registerForm}>
          <h2 className={styles.title}>REGISTER</h2>
          <form>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="First Name"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={styles.input}
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.inputFullWidth}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.inputFullWidth}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.inputFullWidth}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={styles.inputFullWidth}
            />
            <button type="submit" className={styles.registerButton}>
              Register
            </button>
          </form>
          <p className={styles.loginPrompt}>
            Already Login? <a href="/LoginPage">Login</a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.backgroundRectangle}></div>
          <img
            src="/picturesofwebsite/login.png"
            alt="Registration Process"
            className={styles.image}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;