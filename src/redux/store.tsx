let rerenderEntireTree = () => {
  console.log("state changed");
};
const SEND_MESSAGE = "SEND-MESSAGE";
export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type Dialog = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  message: string;
};

export type StateType = {
  profilePage: {
    posts: Array<PostType>;
    newPostText: string;
  };
  messagesPage: {
    dialogs: Array<Dialog>;
    messages: Array<Message>;
    newMessageBody: string;
  };
  sidebar: {};
};

export type StoreType = {
  _state: StateType;
  updateNewPostText: (newText: string) => void;
  addPost: () => void;
  _onChange: () => void;
  subscriber: (observer: () => void) => void; // не понимаю как работает механизм подписчика
  getState: () => StateType;
  dispatch: (action: ActionTypes) => void;
};

export type ActionTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof UpdateNewPostText>
  | ReturnType<typeof SendMessageAC>;

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
export const SendMessageAC = (body: string) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody: body,
  } as const;
};

const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "innax from here", likesCount: 12 },
        { id: "2", message: "Lorem ipsum dolor sit", likesCount: 10 },
      ],
      newPostText: "",
    },

    messagesPage: {
      dialogs: [
        { id: "1", name: "Artem" },
        { id: "2", name: "Vasili" },
        { id: "3", name: "Tom" },
        { id: "4", name: "Dariya" },
        { id: "5", name: "Jerry" },
        { id: "6", name: "Shrek" },
        { id: "7", name: "Jordan" },
      ],
      messages: [
        { id: "1", message: "hi" },
        { id: "2", message: "How is your it-kamasutra?" },
        { id: "3", message: "Yo!" },
        { id: "4", message: "realy nice image" },
        { id: "5", message: "How is iy going?" },
        { id: "6", message: "Shrek" },
        { id: "7", message: "Jordan" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },
  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._onChange();
  },
  addPost() {
    let newPost = {
      id: Date.now().toString(),
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._onChange();
  },
  _onChange() {
    console.log("state changed");
  },
  subscriber(observer) {
    this._onChange = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      const newPost = {
        id: Date.now().toString(),
        message: action.postText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._onChange();
      // this.subscriber(() => this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newPostText;
      this._onChange();
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = "1";
      this._state.messagesPage.messages.push({ id: "45654", message: "body" });
      this._onChange();
    }
  },
};

export default store;
