import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
// import { StoreType } from "./redux/store";
import store, { StoreType } from "./redux/reduxStore";
import { Provider } from "react-redux";

export const renderEntireTree = (state: StoreType) => {
  ReactDOM.render(
    // <App store={state} dispatch={store.dispatch.bind(store)} />,
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

// store.subscriber(() => renderEntireTree(store));
// store.subscribe(renderEntireTree)
store.subscribe(() => {
  // let state = store.getState();
  renderEntireTree(store);
});
renderEntireTree(store);
