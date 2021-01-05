import React from "react";
import { ClientUser } from "./ClientUser";
import ClientsAPI from "../../store/ClientsAPI";
import { observer } from "mobx-react-lite";
import {
  ClientsBlock,
  ClientsTitle,
  ClientsList,
  TableTitle,
  TableTitleName,
} from "./style";

export const Clients = observer(() => {
  return (
    <ClientsBlock>
      <ClientsTitle className="h1">Clients List</ClientsTitle>
      <TableTitle>
        <TableTitleName>Nane</TableTitleName>
        <TableTitleName>Surname</TableTitleName>
        <TableTitleName>Phone</TableTitleName>
        <TableTitleName>Mail</TableTitleName>
        <TableTitleName>Task</TableTitleName>
        <TableTitleName>Comments</TableTitleName>
        <TableTitleName>Date</TableTitleName>
      </TableTitle>
      <ClientsList>
        {ClientsAPI.clients.map((item) => (
          <ClientUser key={item.objectId} item={item} />
        ))}
      </ClientsList>
    </ClientsBlock>
  );
});
