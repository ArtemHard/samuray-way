import App from "./App";
import ReactDOM from "react-dom";
import { StateType } from "./redux/state";

export let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(<App state={state} />, document.getElementById("root"));
};
