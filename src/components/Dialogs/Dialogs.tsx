import style from "./Dialogs.module.css";
import { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import { ActionTypes, Dialog, Message } from "../../redux/store";
import MessageComponent from "./Message/Message"; // переименовал компонент т.к. конфликт
import {
  SendMessageAC,
  updateNewMessageBodyCreator,
} from "../../redux/messagesReducer";

type DialogsPropsType = {
  dialogsData: Array<Dialog>;
  messagesData: Array<Message>;
  newMessageBody: string;
  dispatch: (action: ActionTypes) => void;
};

const Dialogs: FC<DialogsPropsType> = ({
  dialogsData,
  messagesData,
  newMessageBody,
  dispatch,
}) => {
  const dialogsElements = dialogsData.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));

  const messagesElements = messagesData.map((m) => (
    <MessageComponent className={style.dialog} key={m.id} message={m.message} />
  ));

  const onSendMessageClick = () => {
    dispatch(SendMessageAC());
  };

  const onNewMessageClick = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const body = e.target.value;
    dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>
        <div> {messagesElements} </div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
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
