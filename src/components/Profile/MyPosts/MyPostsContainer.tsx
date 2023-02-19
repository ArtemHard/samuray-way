import React, { FC } from "react";
import { addPostAC, UpdateNewPostText } from "../../../redux/profileReducer";
import { StoreType } from "../../../redux/reduxStore";
import { ActionTypes, PostType } from "../../../redux/store";
import MyPosts from "./MyPosts";
type MyPostsContainerPropsType = {
  store: StoreType;
};

const MyPostsContainer: FC<MyPostsContainerPropsType> = (props) => {
  let state = props.store.getState();
  const addPost = (newPostText: string) => {
    props.store.dispatch(addPostAC(newPostText));
  };

  const onPostChange = (text: string) => {
    if (text) props.store.dispatch(UpdateNewPostText(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
