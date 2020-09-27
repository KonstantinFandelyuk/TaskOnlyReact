import React from "react";
import { PotoItem, TextId, Img } from "./style";

function Item({ item, openModal }) {
  return (
    <>
      <PotoItem>
        <TextId>Photo id: {item.id}</TextId>
        <Img
          src={item.url}
          alt=""
          onClick={(e) => {
            openModal(item.id);
          }}
        />
      </PotoItem>
    </>
  );
}

export default Item;
