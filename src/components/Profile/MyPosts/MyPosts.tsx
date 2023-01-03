import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  const message = 'Lorem ipsum dolor sit amet consectetur'
  const likes = 12
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message={message} likes={likes} />
        <Post message='innax from here' likes={100} />
      </div>
    </div>
  );
};

export default MyPosts;
