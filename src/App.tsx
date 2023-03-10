import "./App.css";
import { Header } from "./components/Header/Header";
import { NavBar } from "./components/NavBar/NavBar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";

import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper-content'>
          <Route
            exact
            path='/dialogs'
            render={() => <SuperDialogsContainer />}
          />
          <Route exact path='/profile' render={() => <Profile />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
