import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
// import { StoreType } from "./redux/store";
import store, { StoreReduxType } from "./redux/reduxStore";

export const renderEntireTree = (store: StoreReduxType) => {
  ReactDOM.render(
    <App store={store} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

// store.subscriber(() => renderEntireTree(store));
// store.subscribe(renderEntireTree)
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
renderEntireTree(store.getState());
