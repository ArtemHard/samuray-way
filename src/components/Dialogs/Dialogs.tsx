import style from "./Dialogs.module.css";
import { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import { ActionTypes, Dialog, Message } from "../../redux/store";
import MessageComponent from "./Message/Message"; // переименовал компонент т.к. конфликт
import {
  initialStateMessageType,
  SendMessageAC,
  updateNewMessageBodyCreator,
} from "../../redux/messagesReducer";

type DialogsPropsType = {
  updateNewMessageBody: (body: string) => void;
  onSendMessage: () => void;
  messagesPage: initialStateMessageType;
};

const Dialogs: FC<DialogsPropsType> = ({
  updateNewMessageBody,
  onSendMessage,
  messagesPage,
}) => {
  const dialogsElements = messagesPage.dialogs.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));

  const messagesElements = messagesPage.messages.map((m) => (
    <MessageComponent className={style.dialog} key={m.id} message={m.message} />
  ));

  const onSendMessageClick = () => {
    onSendMessage();
  };

  const onNewMessageClick = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.target.value;
    updateNewMessageBody(body);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>
        <div> {messagesElements} </div>
        <div>
          <div>
            <textarea
              value={messagesPage.newMessageBody}
              onChange={onNewMessageClick}
              placeholder='Enter your message'
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
