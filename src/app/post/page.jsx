import React from 'react';
import PostActions from '@/components/PostActions/PostActions';
import Post from '@/components/PostDesc/PostDesc';
import styles from './page.module.css'

const PostContainer = ({ user, date, title, image, description, likes, dislikes, comments, shares }) => {
    return (
        <div className={styles.container}>
                <Post
                    user={user}
                    date={date}
                    title={title}
                    image={image}
                    description={description}
                />
                <PostActions
                    likes={likes}
                    dislikes={dislikes}
                    comments={comments}
                    shares={shares}
                />
        </div>
    );
};

export default PostContainer;
