"use client";
import React, { useState } from 'react';
import { FaSquare } from "react-icons/fa6";
import { FaShare } from 'react-icons/fa';
import { CiLocationArrow1 } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import styles from './page.module.css';

const PostActions = ({ likes, dislikes, comments, shares }) => {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [commentVisible, setCommentVisible] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        if (disliked) setDisliked(false); // Prevent both like and dislike
    };

    const handleDislike = () => {
        setDisliked(!disliked);
        if (liked) setLiked(false); // Prevent both like and dislike
    };

    const toggleCommentSection = () => {
        setCommentVisible(!commentVisible);
    };

    return (
        <div>
            <div className={styles.postActions}>
                <FaSquare className={styles.startBullet} />
                <button className={`${styles.actionButton} ${liked ? styles.filledButton : ''}`} onClick={handleLike}>
               <FaLocationArrow />
                    <span className={styles.actionButtonCount}> {liked ? likes + 1 : likes}</span>
                </button>
                <span className={styles.separator}>|</span>
                <button className={`${styles.actionButton} ${disliked ? styles.filledButton : ''}`} onClick={handleDislike}>
                    <CiLocationArrow1 />
                    <span className={styles.actionButtonCount}> {disliked ? dislikes + 1 : dislikes}</span>
                </button>
                <span className={styles.separator}>|</span>
                <button className={styles.actionButton} onClick={toggleCommentSection}>
                    <GoCommentDiscussion />
                    <span className={styles.actionButtonCount}> {comments}</span>
                </button>
                <span className={styles.separator}>|</span>
                <button className={styles.actionButton}>
                    <FaShare />
                    <span className={styles.actionButtonCount}> {shares}</span>
                </button>
            </div>

            {commentVisible && (
                <div className={styles.commentSection}>
                    <textarea placeholder="Write a comment..." className={styles.commentTextarea} />
                    <button className={styles.postCommentButton}>Post Comment</button>
                </div>
            )}
        </div>
    );
};

export default PostActions;
