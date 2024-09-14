"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const App = () => {
  const router = useRouter(); // For navigation

  const handleCreateClick = () => {
    router.push('/login'); // Navigate to login page
  };

  return (
    <div className={styles.app}>
      <div className={styles.logoContainer}>
        <img
          src="/com.png"
          alt="Company Logo"
          className={styles.companyLogo}
        />
        <img
          src="/ani.png"
          alt="Anime Logo"
          className={styles.animeLogo}
        />
      </div>
      <h1 className={styles.welcomeText}>Welcome to the Zone</h1>
      <button className={styles.createButton} onClick={handleCreateClick}>
        Create
      </button>
    </div>
  );
};

export default App;

