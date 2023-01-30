import { addPost, PostType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
type ProfilePropsType = {
  posts: Array<PostType>;
  addPost: (postMessage: string) => void;
};
export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  );
};
