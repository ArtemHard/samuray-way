import React from "react";
import MyPosts from "./MyPosts/MyPosts";

import style from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://store-images.s-microsoft.com/image/apps.4083.14191174512742283.25b58903-5b4d-47c0-959c-c79a5aabf46c.17e473bf-b171-4bc5-b00e-f1a6f54977e1"
          alt="forest"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
