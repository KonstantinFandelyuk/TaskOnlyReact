import React from "react";
import { ClientsItem, TableTitle, TableTitleName } from "../style";
import { toJS } from "mobx";

export const ClientUser = ({ item }) => {
  const { name, surname, phone, mail, createdAt, userTask, userComment } = item;
  console.log("object :>> ", toJS(item));
  return (
    <ClientsItem>
      <TableTitle>
        <TableTitleName>{name}</TableTitleName>
        <TableTitleName>{surname}</TableTitleName>
        <TableTitleName>{phone}</TableTitleName>
        <TableTitleName>{mail}</TableTitleName>
        <TableTitleName>{userTask.length > 0 ? userTask[0] : "Задач нет"}</TableTitleName>
        <TableTitleName>{userComment ? userComment : "Комментариев нет"}</TableTitleName>
        <TableTitleName>{createdAt.slice(0, 10)}</TableTitleName>
      </TableTitle>
    </ClientsItem>
  );
};
