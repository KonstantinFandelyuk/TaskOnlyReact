import React from "react";
import { ClientUser } from "./ClientUser";
import ClientsAPI from "../../store/ClientsAPI";
import { observer } from "mobx-react-lite";

export const Clients = observer(() => {
  return (
    <div className="clients">
      <ul>
        <li>
          <div
            style={{
              display: "flex",
              textAlign: "center",
            }}
          >
            <div className="name" style={{ minWidth: "200px" }}>
              Nane
            </div>
            <div className="surname" style={{ minWidth: "200px" }}>
              Surname
            </div>
            <div className="surname" style={{ minWidth: "200px" }}>
              Phone
            </div>
            <div className="mail" style={{ minWidth: "200px" }}>
              Mail
            </div>
          </div>
        </li>
        {ClientsAPI.clients.map((item) => (
          <ClientUser key={item.objectId} item={item} />
        ))}
      </ul>
    </div>
  );
});
