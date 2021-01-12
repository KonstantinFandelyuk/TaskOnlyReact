import React, { useEffect, useState } from "react";
import {
  MessengerBG,
  TitleContainer,
  TitleText,
  TitleButton,
  Card,
  CardImage,
  CardTextContainer,
  CardUserName,
  CardUserText,
  CardUserVisit,
} from "./style";
import { observer } from "mobx-react-lite";
import UserAPI from "../../store/UserAPI";
import ChatStore from "../../store/ChatStore";

export const Messenger = observer(({ showMessenger }) => {
  const [data, setData] = useState([]);
  const [chekIsOnline, setChekIsOnline] = useState(true);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    setData(UserAPI.userAllList);
  }, [UserAPI.userAllList]);

  const openChatHandler = (item) => {
    ChatStore.openChatHandler(!ChatStore.openChat);
    ChatStore.getUserId(item);
  };

  const dragStartHandler = (e, cardItem) => {
    setCurrentCard(cardItem);
    e.target.style.background = "transparent";
  };

  const dragEndHandler = (e) => {
    e.target.style.background = "transparent";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "lightgrey";
  };

  const onDropHandler = (e, cardItem) => {
    e.preventDefault();

    setData(
      data.map((c) => {
        if (c.objectId === cardItem.objectId) {
          return { ...c, order: currentCard.order };
        }
        if (c.objectId === currentCard.objectId) {
          return { ...c, order: cardItem.order };
        }
        return c;
      }),
    );
    e.target.style.background = "transparent";
  };

  const sortCard = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <MessengerBG className="Msg" active={showMessenger}>
      <TitleContainer>
        <TitleText>Messenger</TitleText>
        <TitleButton
          onClick={() => {
            setChekIsOnline(chekIsOnline ? false : true);
          }}
        >
          {chekIsOnline ? "Is Offline" : "Is Online"}
        </TitleButton>
      </TitleContainer>
      <ul>
        {data
          .slice()
          .sort(sortCard)
          .filter((item) => item.isOnline === chekIsOnline)
          .map((item) => {
            return (
              <Card
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, item)}
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => onDropHandler(e, item)}
                key={item.objectId}
                onClick={(e) => {
                  openChatHandler(item);
                }}
              >
                <CardImage active={item.isOnline}>
                  <img src="/images/icon/default-profile.jpg" alt="" />
                </CardImage>
                <CardTextContainer>
                  <CardUserName>
                    {item.username} {item.userSurname}
                  </CardUserName>
                  <CardUserText>{item.title}</CardUserText>
                </CardTextContainer>
                <CardUserVisit>
                  {item.lastVisite ? `visite ${item.lastVisite}` : null}
                </CardUserVisit>
              </Card>
            );
          })}
      </ul>
    </MessengerBG>
  );
});
