import React, { FC } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { ActionTypes, StoreType } from "./redux/store";

type AppPropsType = {
  store: StoreType;
  dispatch: (action: ActionTypes) => void;
};
const App: FC<AppPropsType> = ({ store, dispatch }) => {
  const state = store.getState();
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
              <Dialogs
                dialogsData={state.messagesPage.dialogs}
                messagesData={state.messagesPage.messages}
                newMessageBody={state.messagesPage.newMessageBody}
                dispatch={dispatch}
              />
            )}
          />
          <Route
            exact
            path='/profile'
            render={() => (
              <Profile
                profilePage={state.profilePage}
                newPostText={state.profilePage.newPostText}
                dispatch={dispatch}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
