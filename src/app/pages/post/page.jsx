"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';
import styles from './page.module.css';

const Post = ({ user, date, title, image, description, likes, comments, shares }) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <div className={styles.profileContainer}>
                    <Image
                        src={user.profilePicture}
                        alt="Profile Picture"
                        width={50}
                        height={50}
                        className={styles.profilePicture}
                    />
                    <div className={styles.dottedLine}></div> {/* Dotted line */}
                </div>
                <div className={styles.userInfo}>
                    <span className={styles.userName}>{user.name}</span>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.userDetails}>{`@${user.username}`}</span>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.date}>{date}</span>
                </div>
            </div>

            <div className={styles.postContent}>
                <h3 className={styles.postTitle}>{title}</h3>
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={400}
                        height={200}
                        className={styles.postImage}
                    />
                )}
                <p className={styles.postDecription}>
                    {description.slice(0, 150)}
                    {description.length > 150 && showMore ? description.slice(150) : showMore ? '' : '...'}
                </p>
                {description.length > 50 && (
                    <button onClick={handleShowMore} className={styles.showMoreButton}>
                        {showMore ? 'Show Less' : 'Show More'}
                    </button>
                )}
            </div>
            <div className={styles.postActions}>
                <button className={styles.actionButton}>
                    <FaHeart />
                    <span className={styles.actionButtonCount}> {likes}</span>
                </button>
                <button className={styles.actionButton}>
                    <FaComment />
                    <span className={styles.actionButtonCount}> {comments}</span>
                </button>
                <button className={styles.actionButton}>
                    <FaShare />
                    <span className={styles.actionButtonCount}> {shares}</span>
                </button>
            </div>
        </div>
    );
};

export default Post;
