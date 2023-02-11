import React, { FC } from "react";
import { PostType } from "../../../redux/store";

import style from "./MyPosts.module.css";
import Post from "./Posts/Post";
type MyPostsPropsType = {
  posts: Array<PostType>;
  addPost: () => void;
  newPostText: string;
  updateNewPostText: (newText: string) => void;
};

const MyPosts: FC<MyPostsPropsType> = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const onClickHandler = () => {
    let text = newPostElement.current?.value;
    props.addPost();
    if (text) props.updateNewPostText(" ");
  };

  const onPostChange = () => {
    let text = newPostElement.current?.value;
    if (text) props.updateNewPostText(text);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={onClickHandler}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
