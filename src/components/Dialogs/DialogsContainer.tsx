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
import Dialogs from "./Dialogs";
import { StoreType } from "../../redux/reduxStore";
import { connect } from "react-redux";
import { Dispatch } from "redux";

type MapStatePropsType = {
  messagesPage: initialStateMessageType;
};
let mapStateToProps = (state: StoreType): MapStatePropsType => {
  return {
    messagesPage: state.messagesPage,
  };
};

type MapDispatchToPropsType = {
  updateNewMessageBody: (body: string) => void;
  onSendMessage: () => void;
};

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageBody: (body: string) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    onSendMessage: () => {
      dispatch(SendMessageAC());
    },
  };
};

const SuperDialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default SuperDialogsContainer;
