import React from "react";
import styles from './page.module.css'; // Import CSS module
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'; // Notification icon

const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      user: {
        name: 'John Doe',
        profilePicture: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      },
      title: 'John Doe liked your post.',
      description: 'Your post on "Black Hole" received a like!',
      time: '2 hours ago',
    },
    {
      id: 2,
      user: {
        name: 'Alice Smith',
        profilePicture: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      },
      title: 'Alice Smith commented on your post.',
      description: '"I love this content! Keep it up!"',
      time: '1 day ago',
    },
    {
      id: 3,
      user: {
        name: 'Bob Johnson',
        profilePicture: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      },
      title: 'Bob Johnson started following you.',
      description: '',
      time: '3 days ago',
    },
  ];

  return (
    <div className={styles.notificationContainer}>
      <h1 className={styles.header}>
        <FontAwesomeIcon icon={faBell} className={styles.bellIcon} /> Notifications
      </h1>

      <ul className={styles.notificationList}>
        {notifications.map((notification) => (
          <li key={notification.id} className={styles.notificationItem}>
            <img
              src={notification.user.profilePicture}
              alt={`${notification.user.name} profile`}
              className={styles.profilePicture}
            />
            <div className={styles.notificationDetails}>
              <h3 className={styles.title}>{notification.title}</h3>
              {notification.description && (
                <p className={styles.description}>{notification.description}</p>
              )}
              <span className={styles.time}>{notification.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
