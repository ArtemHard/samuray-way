import { ActionTypes, PostType } from "./store";

export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState: initialStateProfileType = {
  posts: [
    { id: "1", message: "innax from here", likesCount: 12 },
    { id: "2", message: "Lorem ipsum dolor sit", likesCount: 10 },
  ],
  newPostText: "",
};

export type initialStateProfileType = {
  posts: Array<PostType>;
  newPostText: string;
};
export const profileReducer = (
  state = initialState,
  action: ActionTypes
): initialStateProfileType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: Date.now().toString(),
        message: action.postText,
        likesCount: 0,
      };
      const stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.newPostText;

      // state.newPostText = action.newPostText;
      return stateCopy;
    }

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
