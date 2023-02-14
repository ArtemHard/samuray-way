import { ActionTypes } from "./store";

type InitialStateType = {};
const initialState: InitialStateType = {};
export const sidebarReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  return state;
};
