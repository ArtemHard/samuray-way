import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import store, { StoreType } from "./redux/store";

export const renderEntireTree = (store: StoreType) => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

store.subscriber(() => renderEntireTree(store));
renderEntireTree(store);
