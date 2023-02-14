import {
  ActionTypes,
  Dialog,
  Message,
  SendMessageAC,
  updateNewMessageBodyCreator,
} from "./store";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

type initialState = {
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  newMessageBody: string;
};

export const messagesReducer = (
  state: initialState,
  action: ActionTypes
): initialState => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({ id: "45654", message: body });
      state.newMessageBody = " ";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.newMessageBody };

    default:
      return state;
  }
};
