import { ActionTypes, PostType } from "../../redux/store";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};
type ProfilePropsType = {
  profilePage: ProfilePageType;
  newPostText: string;
  dispatch: (action: ActionTypes) => void;
};
export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
    </div>
  );
};
