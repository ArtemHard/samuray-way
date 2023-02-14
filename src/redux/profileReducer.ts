import { ActionTypes, PostType } from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type initialState = {
  posts: Array<PostType>;
  newPostText: string;
};
export const profileReducer = (
  state: initialState,
  action: ActionTypes
): initialState => {
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
