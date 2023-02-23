import { combineReducers, createStore } from "redux";
import { messagesReducer } from "./messagesReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

export const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
});

let store = createStore(rootReducer);
export type StoreType = ReturnType<typeof rootReducer>;

export type StoreReduxType = ReturnType<typeof store.getState>;

export default store;
