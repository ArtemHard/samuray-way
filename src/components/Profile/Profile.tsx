import { PostType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
type ProfilePageType = {
  posts: PostType[];
    newPostText: string;
}
type ProfilePropsType = {
  profilePage:ProfilePageType
  newPostText: string
  addPost: () => void;
  updateNewPostText: (newText: string) => void
};
export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}  />
    </div>
  );
};
