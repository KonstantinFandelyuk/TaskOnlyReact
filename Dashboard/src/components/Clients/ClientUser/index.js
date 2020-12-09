import React from "react";

export const ClientUser = ({ item }) => {
  return (
    <li>
      <div
        style={{
          display: "flex",
          textAlign: "center",
        }}
      >
        <div className="name" style={{ minWidth: "200px" }}>
          {item.name}
        </div>
        <div className="surname" style={{ minWidth: "200px" }}>
          {item.surname}
        </div>
        <div className="surname" style={{ minWidth: "200px" }}>
          {item.phone}
        </div>
        <div className="mail" style={{ minWidth: "200px" }}>
          {item.mail}
        </div>
      </div>
    </li>
  );
};
