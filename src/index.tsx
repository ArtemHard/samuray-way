import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import state, { StateType, subscriber } from "./redux/state";


 let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(<App state={state} />, document.getElementById("root"));
  };

  rerenderEntireTree(state)
  
  subscriber(rerenderEntireTree)