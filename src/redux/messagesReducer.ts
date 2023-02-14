import { ActionTypes, Dialog, Message } from "./store";

export const SEND_MESSAGE = "SEND-MESSAGE";
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

type initialStateType = {
  dialogs: Array<Dialog>;
  messages: Array<Message>;
  newMessageBody: string;
};

const initialState: initialStateType = {
  dialogs: [
    { id: "1", name: "Artem" },
    { id: "2", name: "Vasili" },
    { id: "3", name: "Tom" },
    { id: "4", name: "Dariya" },
    { id: "5", name: "Jerry" },
    { id: "6", name: "Shrek" },
    { id: "7", name: "Jordan" },
  ],
  messages: [
    { id: "1", message: "hi" },
    { id: "2", message: "How is your it-kamasutra?" },
    { id: "3", message: "Yo!" },
    { id: "4", message: "realy nice image" },
    { id: "5", message: "How is iy going?" },
    { id: "6", message: "Shrek" },
    { id: "7", message: "Jordan" },
  ],
  newMessageBody: "",
};
export const messagesReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
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

export const SendMessageAC = () => {
  return {
    type: SEND_MESSAGE,
  } as const;
};
export const updateNewMessageBodyCreator = (body: string) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: body,
  } as const;
};
