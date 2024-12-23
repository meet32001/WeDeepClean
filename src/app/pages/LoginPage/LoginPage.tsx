import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <h2 className={styles.title}>LOGIN</h2>
        <form>
          <input type="text" placeholder="Username" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <button type="submit" className={styles.loginButton}>Login Now</button>
        </form>
        <div className={styles.socialLogin}>
          <p>Or</p>
          <div className={styles.socialButtons}>
            <button className={styles.socialButton}>
              <img src="/google.svg" alt="Google Icon" className={styles.icon} /><span>Login with<b> Google</b></span>
            </button>
            <button className={styles.socialButton}>
              <img src="/facebook.svg" alt="Facebook Icon" className={styles.icon} /><span>Login with <b>Facebook</b></span>
            </button>
            <button className={styles.socialButton}>
              <img src="/apple.svg" alt="Apple Icon" className={styles.icon} /><span>Login with  <b>Apple ID</b></span>
            </button>
          </div>
        </div>
        <p className={styles.register}>
          Haven’t Registered? <a href="/register">Register here</a>
        </p>
      </div>
      <div className={styles.imageContainer}>
       <div className={styles.backgroundRectangle}></div>
        <img src="/login.png" alt="Cleaning Service" className={styles.image} />
      </div>
    </div>
  );
};

export default LoginPage;
