"use client"
import React, { useState } from "react";
import styles from './page.module.css'; // Import CSS for styles

const Create = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show preview of uploaded image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    console.log('Creating post with:', { title, description, image });

    // Reset the form after submission
    setTitle('');
    setDescription('');
    setImage(null);
    setPreview(null);
  };

  return (
    <div className={styles.createPostContainer}>
      <h1 className={styles.header}>Create New Post</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.inputField}
            placeholder="Enter post title"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textareaField}
            placeholder="Write a description..."
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.fileInput}
          />
          {preview && (
            <div className={styles.imagePreview}>
              <img src={preview} alt="Image Preview" className={styles.previewImg} />
            </div>
          )}
        </div>
        <button type="submit" className={styles.submitButton}>Create Post</button>
      </form>
    </div>
  );
};

export default Create;
