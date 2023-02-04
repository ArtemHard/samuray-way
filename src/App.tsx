import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost, StateType } from "./redux/state";


type AppPropsType = {
  state: StateType;
};
function App({ state }: AppPropsType) {
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
              />
            )}
          />
          <Route
            exact
            path='/profile'
            render={() => (
              <Profile profilePage={state.profilePage} newPostText={state.profilePage.newPostText} addPost={addPost} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
