import React from "react";
import {
  Card,
  CardImage,
  CardTextContainer,
  CardUserName,
  CardUserText,
  CardUserVisit,
} from "./style";
import { Draggable } from "react-beautiful-dnd";

export const UserCard = ({ item, index }) => {
  return (
    <Draggable draggableId={item.objectId} index={index}>
      {(provided) => (
        <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <CardImage active={item.isOnline}>
            <img src="/images/icon/default-profile.jpg" alt="" />
          </CardImage>
          <CardTextContainer>
            <CardUserName>
              {item.username} {item.userSurname}
            </CardUserName>
            <CardUserText>{item.title}</CardUserText>
          </CardTextContainer>
          <CardUserVisit>{item.lastVisite ? `visite ${item.lastVisite}` : null}</CardUserVisit>
        </Card>
      )}
    </Draggable>
  );
};
