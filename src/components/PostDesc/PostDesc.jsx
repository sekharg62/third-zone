"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const Post = ({ user, date, title, image, description }) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    // Safely handle undefined or null description
    const isLongDescription = description && description.length > 150;

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.profileContainer}>
                    {/* Safely check for user and profilePicture */}
                    {user && user.profilePicture && (
                        <Image
                            src={user.profilePicture}
                            alt="Profile Picture"
                            width={50}
                            height={50}
                            className={styles.profilePicture}
                        />
                    )}
                </div>
                <div className={styles.userInfo}>
                    {user && (
                        <>
                            <span className={styles.userName}>{user.name}</span>
                            <span className={styles.bullet}>•</span>
                            <span className={styles.userDetails}>{`@${user.username}`}</span>
                            <span className={styles.bullet}>•</span>
                            <span className={styles.date}>{date}</span>
                        </>
                    )}
                </div>
            </div>

            <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{title}</h3>

                {/* Safely check for image */}
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={200}
                        className={styles.postImage}
                    />
                )}

                {/* Safely check for description */}
                {description && (
                    <p className={styles.postDescription}>
                        {showMore || !isLongDescription
                            ? description
                            : `${description.slice(0, 150)}...`}
                    </p>
                )}

                {/* Show "Show More" button if description is long */}
                {isLongDescription && (
                    <button onClick={handleShowMore} className={styles.showMoreButton}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Post;
