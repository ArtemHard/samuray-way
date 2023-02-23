import { FC } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { StoreType } from "./redux/reduxStore";

type AppPropsType = {
  store: StoreType;
};
const App: FC<AppPropsType> = ({ store }) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
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
