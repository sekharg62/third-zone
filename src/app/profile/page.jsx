import React from 'react';
import styles from './page.module.css'; // Import the CSS file for profile styles

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <h1>Profile Page</h1>
      <div className={styles.profileInfo}>
        <img 
          className={styles.profileImage} 
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Profile Picture" 
        />
        <h2>Test User</h2>
        <p>@test</p>
        <button className={styles.editButton}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
