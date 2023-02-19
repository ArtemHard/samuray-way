import { FC } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { ActionTypes } from "./redux/store";
import { StoreReduxType, StoreType } from "./redux/reduxStore";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
  store: StoreType;
  // dispatch: (action: ActionTypes) => void;
};
const App: FC<AppPropsType> = ({ store }) => {
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
            render={() => <DialogsContainer store={store} />}
          />
          <Route
            exact
            path='/profile'
            render={() => <Profile store={store} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
