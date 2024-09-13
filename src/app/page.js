import React from "react";
import PostContainer from "./pages/post";
import Sidebar from "@/components/SideBar/SideBar";
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faPlusCircle, faHome, faBell } from '@fortawesome/free-solid-svg-icons'; // Import faBell for notification icon

const App = () => {
  const posts = [
    {
      user: {
        name: 'Test',
        username: 'test',
        profilePicture: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '16 Aug',
      title: "Let's talk about the black hole today.",
      image: 'https://images.pexels.com/photos/27847621/pexels-photo-27847621/free-photo-of-black-and-white-photo-of-birds-flying-over-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Black holes are invisible because they emit no light, but space telescopesack holes are invisible because they emit no light, but space telescopes with special instruments can help find them by observing the behavior of nearby stars and gas.',
      likes: 1,
      dislikes: 5,
      comments: 9,
      shares: 0,
    },
    {
      user: {
        name: 'Test',
        username: 'test',
        profilePicture: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '16 Aug',
      title: 'Do you have any next big idea?',
      image: 'https://images.pexels.com/photos/27847621/pexels-photo-27847621/free-photo-of-black-and-white-photo-of-birds-flying-over-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'I got something which is not that better. Write about your ideas in the discussion and we will feature one big idea every day!',
      likes: 2,
      dislikes: 4,
      comments: 3,
      shares: 0,
    },
    {
      user: {
        name: 'Test',
        username: 'test',
        profilePicture: 'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '16 Aug',
      title: "Let's make this the most used social media in the world!!",
      image: 'https://images.pexels.com/photos/27847621/pexels-photo-27847621/free-photo-of-black-and-white-photo-of-birds-flying-over-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: '',
      likes: 120,
      dislikes: 12,
      comments: 0,
      shares: 0,
    },
  ];

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.pageHead}>
          <h1>Third Zone</h1>
          {/* Add Notification Icon */}
          <FontAwesomeIcon icon={faBell} className={styles.icon} />
        </div>

        {posts.map((post, index) => (
          <PostContainer key={index} {...post} className={styles.posts} />
        ))}
      </div>
      {/* Footer with icons for mobile and tablet screens */}
      <div className={styles.navFooter}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} /> {/* Profile Icon */}
        <FontAwesomeIcon icon={faSearch} /> {/* Search Icon */}
        <FontAwesomeIcon icon={faPlusCircle} /> {/* Create Icon */}
        <FontAwesomeIcon icon={faHome} /> {/* Home Icon */}
      </div>
    </div>
  );
};

export default App;
