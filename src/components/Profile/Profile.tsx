import { PostType } from "../../App";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
type ProfilePropsType = {
  posts: Array<PostType>;
};
export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};
