import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type dialogsDataType = Array<Dialog>;
type Dialog = {
  id: string;
  name: string;
};

export type messageDataType = Array<Message>;
type Message = {
  id: string;
  message: string;
};

function App() {
  const postsData: Array<PostType> = [
    { id: "1", message: "innax from here", likesCount: 12 },
    { id: "2", message: "Lorem ipsum dolor sit", likesCount: 10 },
  ];

  let dialogsData: dialogsDataType = [
    { id: "1", name: "Artem" },
    { id: "2", name: "Vasili" },
    { id: "3", name: "Tom" },
    { id: "4", name: "Dariya" },
    { id: "5", name: "Jerry" },
    { id: "6", name: "Shrek" },
    { id: "7", name: "Jordan" },
  ];

  const messagesData: messageDataType = [
    { id: "1", message: "hi" },
    { id: "2", message: "How is your it-kamasutra?" },
    { id: "3", message: "Yo!" },
    { id: "4", message: "realy nice image" },
    { id: "5", message: "How is iy going?" },
    { id: "6", message: "Shrek" },
    { id: "7", message: "Jordan" },
  ];
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          {/* <Route exact path='/dialogs' component={Dialogs} />
          <Route path='/profile' component={Profile} /> */}
          <Route
            exact
            path='/dialogs'
            render={() => (
              <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
            )}
          />
          <Route
            exact
            path='/profile'
            render={() => <Profile posts={postsData} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
