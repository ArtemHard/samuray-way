let rerenderEntireTree =() => {
  console.log('state changed')
}

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
    newPostText: string
  };
  messagesPage: {
    dialogs: Array<Dialog>;
    messages: Array<Message>;
  };
  sidebar: {};
};


export type StoreType = {
  _state: StateType
  updateNewPostText: (newText: string) => void
  addPost: () =>  void 
  _onChange: () => void
  subscriber: (observer: () => void) => void
  getState: () => StateType
}
const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "innax from here", likesCount: 12 },
        { id: "2", message: "Lorem ipsum dolor sit", likesCount: 10 },
      ],
      newPostText: ''
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
    },
    sidebar: {}
  },
  updateNewPostText (newText: string)  {
    this._state.profilePage.newPostText = newText
    this._onChange()
  },
  addPost  ()  {
    let newPost = {
      id: Date.now().toString(),
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._onChange()
  },
  _onChange() {
    console.log('state changed')
  },
  subscriber (observer)  {
    this._onChange = observer
},
getState() {
  return this._state
}
}

export default store
