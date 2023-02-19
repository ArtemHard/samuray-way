import style from "./Dialogs.module.css";
import { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import { ActionTypes, Dialog, Message } from "../../redux/store";
import MessageComponent from "./Message/Message"; // переименовал компонент т.к. конфликт
import {
  SendMessageAC,
  updateNewMessageBodyCreator,
} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import { StoreType } from "../../redux/reduxStore";

type DialogsContainerPropsType = {
  store: StoreType;
};

const DialogsContainer: FC<DialogsContainerPropsType> = ({ store }) => {
  let messagesPage = store.getState().messagesPage;

  const onSendMessage = () => {
    store.dispatch(SendMessageAC());
  };

  const onNewMessageChange = (body: string) => {
    // const body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      onSendMessage={onSendMessage}
      messagesPage={messagesPage}
    />
  );
};

export default DialogsContainer;
