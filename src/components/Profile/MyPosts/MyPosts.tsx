import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  const message = "Lorem ipsum dolor sit amet consectetur";
  const likes = 12;

  const postsData = [
    { id: "1", message: "innax from here", likesCount: 12 },
    { id: "2", message: "Lorem ipsum dolor sit", likesCount: 10 },
  ];

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>
        <Post message={message} likes={likes} />
        <Post message='innax from here' likes={100} />
      </div>
    </div>
  );
};

export default MyPosts;
