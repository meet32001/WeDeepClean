import React from 'react';
import styles from './RegistrationPage.module.css';

const RegistrationPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.registerForm}>
        <h2 className={styles.title}>REGISTER</h2>
        <form>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="First Name" className={styles.input} />
            <input type="text" placeholder="Last Name" className={styles.input} />
          </div>
          <input type="email" placeholder="Your Email" className={styles.inputFullWidth} />
          <input type="tel" placeholder="Phone Number" className={styles.inputFullWidth} />
          <input type="password" placeholder="Password" className={styles.inputFullWidth} />
          <input type="password" placeholder="Confirm Password" className={styles.inputFullWidth} />
          <button type="submit" className={styles.registerButton}>Register</button>
        </form>
        <p className={styles.loginPrompt}>
          Already Login? <a href="/login">Login</a>
        </p>
      </div>
      <div className={styles.imageSection}>
      <div className={styles.backgroundRectangle}></div>
        <img src="/register.png" alt="Registration Process" className={styles.image} />
      </div>
    </div>
  );
};

export default RegistrationPage;
