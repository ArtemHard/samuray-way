import style from "./Dialogs.module.css";
import { FC } from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
type DialogsPropsType = {};

const Dialogs: FC<DialogsPropsType> = (props) => {
  let dialogsData = [
    { id: "1", name: "Artem" },
    { id: "2", name: "Vasili" },
    { id: "3", name: "Tom" },
    { id: "4", name: "Dariya" },
    { id: "5", name: "Jerry" },
    { id: "6", name: "Shrek" },
    { id: "7", name: "Jordan" },
  ];
  const dialogsElements = dialogsData.map((d) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));
  const messagesData = [
    { id: "1", message: "hi" },
    { id: "2", message: "How is your it-kamasutra?" },
    { id: "3", message: "Yo!" },
    { id: "4", message: "realy nice image" },
    { id: "5", message: "How is iy going?" },
    { id: "6", message: "Shrek" },
    { id: "7", message: "Jordan" },
  ];
  const messagesElements = messagesData.map((m) => (
    <Message className={style.dialog} key={m.id} message={m.message} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogsElements}</div>
      <div className={style.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
