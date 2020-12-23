import React from "react";
import { ClientsItem, TableTitle, TableTitleName } from "../style";
import { toJS } from "mobx";

export const ClientUser = ({ item }) => {
  const { name, surname, phone, mail, createdAt, userTask } = item;
  console.log("item :>> ", toJS(item));
  return (
    <ClientsItem>
      <TableTitle>
        <TableTitleName>{name}</TableTitleName>
        <TableTitleName>{surname}</TableTitleName>
        <TableTitleName>{phone}</TableTitleName>
        <TableTitleName>{mail}</TableTitleName>
        <TableTitleName>{userTask.length > 0 ? userTask[0] : "Задач нет"}</TableTitleName>
        <TableTitleName>{userTask.length > 0 ? userTask[0] : "Комментариев нет"}</TableTitleName>
        <TableTitleName>{createdAt}</TableTitleName>
      </TableTitle>
    </ClientsItem>
  );
};
