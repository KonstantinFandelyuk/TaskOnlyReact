import React from "react";
import ChatStore from "../../../store/ChatStore";
import { ChatMsg, Name, Time, Msg } from "../style";
import { msToTime } from "../../Helpers/Helpers";

export const MsgList = ({ messages }) => {
  return (
    <ul>
      {messages.map(({ name, time, msg, userId }, i) => (
        <ChatMsg key={i} right={userId === ChatStore.currentUserId}>
          <Time>{msToTime(time)}</Time>
          <Name>{name}</Name>
          <Msg>{msg}</Msg>
        </ChatMsg>
      ))}
    </ul>
  );
};
