import React, { useEffect } from "react";
import { ClientUser } from "./ClientUser";
import ClientsAPI from "../../store/ClientsAPI";
import { observer } from "mobx-react-lite";

export const Clients = observer(() => {
  useEffect(() => {
    ClientsAPI.checkClientsList();
  }, []);

  return (
    <div className="clients">
      <ul>
        {ClientsAPI.clients.map((item) => (
          <ClientUser key={item.objectId} item={item} />
        ))}
      </ul>
    </div>
  );
});
