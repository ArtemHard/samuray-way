import { ActionTypes, PostType } from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState: initialStateType = {
  posts: [
    { id: "1", message: "innax from here", likesCount: 12 },
    { id: "2", message: "Lorem ipsum dolor sit", likesCount: 10 },
  ],
  newPostText: "",
};

type initialStateType = {
  posts: Array<PostType>;
  newPostText: string;
};
export const profileReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: Date.now().toString(),
        message: action.postText,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;

    default:
      return state;
  }
};

export const addPostAC = (postText: string) => {
  return {
    type: "ADD-POST",
    postText: postText,
  } as const;
};
export const UpdateNewPostText = (newPostText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newPostText: newPostText,
  } as const;
};
