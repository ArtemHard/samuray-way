import { addPostAC, UpdateNewPostText } from "../../../redux/profileReducer";
import { StoreType } from "../../../redux/reduxStore";
import { PostType } from "../../../redux/store";
import MyPosts from "./MyPosts";
import { Dispatch } from "redux";
import { connect } from "react-redux";

type MapStatePropsType = {
  posts: Array<PostType>;
  newPostText: string;
};
const mapStateToProps = (state: StoreType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

type MapDispatchToPropsType = {
  updateNewPostText: (text: string) => void;
  addPost: (newPostText: string) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewPostText: (text) => {
      dispatch(UpdateNewPostText(text));
    },
    addPost: (newPostText) => {
      dispatch(addPostAC(newPostText));
    },
  };
};

const SuperMyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default SuperMyPostsContainer;
