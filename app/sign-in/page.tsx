"use client";

import React, { useState } from 'react';
import styles from './signIn.module.css'; // Importing CSS module for styling

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setError('');
    console.log('Signing in with', { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.signInBox}>
        <h1 className={styles.title}>Sign In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <p className={styles.error}>{error}</p>}
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              placeholder="Enter your password"
              required
            />
            <a href="/forgot-password" className={styles.forgotPassword}>Forgot your password?</a>
          </div>
          <button type="submit" className={styles.button}>Sign In</button>
        </form>
        <div className={styles.orSeparator}>or</div>
        <div className={styles.socialButtons}>
          <button className={`${styles.socialButton} ${styles.microsoftButton}`}>
            <img src="/icons/microsoft-placeholder.png" alt="Microsoft" className={styles.icon} /> Continue with Microsoft
          </button>
          <button className={`${styles.socialButton} ${styles.googleButton}`}>
            <img src="/icons/google-placeholder.png" alt="Google" className={styles.icon} /> Continue with Google
          </button>
        </div>
        <div className={styles.additionalLinks}>
          <p>Don't have an account? <a href="/sign-up" className={styles.signUpLink}>Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
