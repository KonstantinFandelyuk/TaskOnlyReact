import React, { useEffect } from "react";
import ChatStore from "../../store/ChatStore";
import { ChatBlock, Title, ChatBG } from "./style";
import { observer } from "mobx-react-lite";
import { MsgList } from "./MsgList";

export const Chat = observer(() => {
  useEffect(() => {
    ChatStore.fetchMsg();
  }, []);

  const id = "UfLhCWpJb4";

  const sendMsgHandler = () => {
    const messages = [];
    ChatStore.msgList.map((el) => {
      if (el.createChat) {
        if (
          (el.checkUser === ChatStore.activeUserId && el.currentUser === ChatStore.currentUserId) ||
          (el.currentUser === ChatStore.activeUserId && el.checkUser === ChatStore.currentUserId)
        ) {
          messages.push(...el.messages, {
            id: new Date().getTime(),
            userId: ChatStore.currentUserId,
            name: ChatStore.currentUserName,
            time: new Date().getTime(),
            msg: ChatStore.userMsg,
          });
        }
        ChatStore.sendMsg(id, { messages });
      }
    });
  };

  return (
    <ChatBlock>
      <ChatBG>
        <Title>Отправить сообщение</Title>
        {ChatStore.msgList.map(({ messages, currentUser, checkUser, objectId, createChat }) => {
          if (createChat) {
            if (
              (checkUser === ChatStore.activeUserId && currentUser === ChatStore.currentUserId) ||
              (currentUser === ChatStore.activeUserId && checkUser === ChatStore.currentUserId)
            ) {
              return <MsgList messages={messages} key={objectId} />;
            }
          }
        })}
        <input
          type="text"
          name="text"
          value={ChatStore.userMsg}
          onChange={(e) => {
            ChatStore.getUserMsg(e.target.value);
          }}
        />
        <button
          type="button"
          onClick={(e) => {
            sendMsgHandler();
          }}
        >
          Отправить сообщение
        </button>
      </ChatBG>
    </ChatBlock>
  );
});
