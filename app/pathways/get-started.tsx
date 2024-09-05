import React from 'react';
import Link from 'next/link';
import styles from './getStarted.module.css'; // Optional: For additional styling

const GetStartedPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get Started</h1>
      <p className={styles.description}>
        Welcome to the Get Started page! Here you will find all the information you need to begin your journey.
      </p>
      <Link href="/" className={styles.homeLink}>
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default GetStartedPage;
