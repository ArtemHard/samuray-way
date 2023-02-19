import { StoreType } from "../../redux/reduxStore";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
  store: StoreType;
};
export const Profile = ({ store }: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </div>
  );
};
