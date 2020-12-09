import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { MessegerBG, TitleContainer, TitleText, TitleButton } from "./style";
import { UserCard } from "./UserCard";
import { observer } from "mobx-react-lite";
import UserAPI from "../../store/UserAPI";
import DndUpdater from "../../store/DnD";

export const Messeger = observer(() => {
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(UserAPI.userAllList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    DndUpdater.updateUserListInMsg(items);
  }
  return (
    <MessegerBG className="Msg">
      <TitleContainer>
        <TitleText>Messeger</TitleText>
        <TitleButton>See all</TitleButton>
      </TitleContainer>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="UserAPI.userAllList">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {UserAPI.userAllList.map((item, index) => {
                return <UserCard item={item} index={index} key={item.objectId} />;
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </MessegerBG>
  );
});
