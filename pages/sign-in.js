// pages/sign-in.js
import { useState } from 'react';
import styles from '../styles/SignIn.module.css';

export default function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <div className={styles.formToggle}>
          <button 
            className={`${styles.toggleBtn} ${isSignIn ? styles.active : ''}`}
            onClick={() => setIsSignIn(true)}
          >
            Sign In
          </button>
          <button 
            className={`${styles.toggleBtn} ${!isSignIn ? styles.active : ''}`}
            onClick={() => setIsSignIn(false)}
          >
            Sign Up
          </button>
        </div>

        {isSignIn ? (
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className={styles.forgotPassword}>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className={styles.submitBtn}>Sign In</button>
          </form>
        ) : (
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" required />
            </div>
            <button type="submit" className={styles.submitBtn}>Sign Up</button>
          </form>
        )}

        <div className={styles.socialLogin}>
          <p>Or continue with</p>
          <div className={styles.socialButtons}>
            <button className={styles.socialBtn}>Google</button>
            <button className={styles.socialBtn}>Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}