"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const router = useRouter(); // For navigation

  const handleCreateClick = () => {
    router.push("/login"); // Navigate to login page
  };

  return (
    <div className={styles.app}>
      <div className={styles.leftSection}>
     
        <h1 className={styles.companyLogo}>
          Third <br /> Zone
        </h1>
        <img
          src="/ani.png"
          alt="Anime Logo"
          className={styles.animeLogo}
        />
      </div>

      <div className={styles.divider}></div> {/* Half-circle divider */}

      <div className={styles.rightSection}>
        <h3 className={styles.welcomeText}>Welcome to</h3>
        <h2 className={styles.zone}>The Zone</h2>
        <button className={styles.createButton} onClick={handleCreateClick}>
          Get Started{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.arrowIcon}
          />{" "}
        </button>
      </div>
    </div>
  );
};

export default App;
