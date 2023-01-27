import style from "./Dialogs.module.css";
import { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import { Dialog, Message } from "../../redux/state";
import MessageComponent from "./Message/Message"; // переименовал компонент т.к. конфликт
type DialogsPropsType = {
  dialogsData: Array<Dialog>;
  messagesData: Array<Message>;
};

const Dialogs: FC<DialogsPropsType> = ({ dialogsData, messagesData }) => {
  const dialogsElements = dialogsData.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));

  const messagesElements = messagesData.map((m) => (
    <MessageComponent className={style.dialog} key={m.id} message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
