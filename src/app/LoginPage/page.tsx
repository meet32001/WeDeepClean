import React from "react";
import styles from "./LoginPage.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginPageComponent: React.FC = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.loginForm}>
          <h2 className={styles.title}>LOGIN</h2>
          <form>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
            />
            <button type="submit" className={styles.loginButton}>
              Login Now
            </button>
          </form>
          <div className={styles.socialLogin}>
            <p>Or</p>
            <div className={styles.socialButtons}>
              <button className={`${styles.socialButton} ${styles.google}`}>
                <i className="fab fa-google"></i>
                <span>Login with Google</span>
              </button>
              <button className={`${styles.socialButton} ${styles.facebook}`}>
                <i className="fab fa-facebook-f"></i>
                <span>Login with Facebook</span>
              </button>
              <button className={`${styles.socialButton} ${styles.apple}`}>
                <i className="fab fa-apple"></i>
                <span>Login with Apple ID</span>
              </button>
            </div>
          </div>
          <p className={styles.register}>
            Haven’t Registered? <a href="/RegistrationPage">Register here</a>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.backgroundRectangle}></div>
          <img
            src="/picturesofwebsite/login.png"
            alt="Cleaning Service"
            className={styles.image}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPageComponent;