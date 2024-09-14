"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const Login = () => {
  const router = useRouter(); 

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    router.push('/home'); // Navigate to the home page
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginHeader}>Login</h1>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <input type="text" placeholder="Username" className={styles.inputField} />
        <input type="password" placeholder="Password" className={styles.inputField} />
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
