import SuperMyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <SuperMyPostsContainer />
    </div>
  );
};
