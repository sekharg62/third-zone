import React from "react";
import Post from "./pages/post/page";

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
      description:
        'Black holes are invisible because they emit no light, but space telescopesack holes are invisible because they emit no light, but space telescopes with special instruments can help find them by observing the behavior of nearby stars and gas.',
      likes: 1,
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
      description:
        'I got something which is not that better. Write about your ideas in the discussion and we will feature one big idea every day!',
      likes: 0,
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
      description: '',
      likes: 0,
      comments: 0,
      shares: 0,
    },
  ];

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default App;