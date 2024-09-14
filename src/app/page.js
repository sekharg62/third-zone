"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import arrow icon

const App = () => {
  const router = useRouter(); // For navigation

  const handleCreateClick = () => {
    router.push("/login"); // Navigate to login page
  };

  return (
    <div className={styles.app}>
      <div className={styles.logoContainer}>
        <h1 className={styles.companyLogo}>Third <br />Zone</h1>
        <img src="/ani.png" alt="Anime Logo" className={styles.animeLogo} />
      </div>
      <h3 className={styles.welcomeText}>
        Welcome to
      </h3>
      <h2 className={styles.zone}>The Zone</h2>
      <button className={styles.createButton} onClick={handleCreateClick}>
        Get Started <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} /> {/* Add arrow icon */}
      </button>
    </div>
  );
};

export default App;


