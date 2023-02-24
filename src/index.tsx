import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
// import { StoreType } from "./redux/store";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
