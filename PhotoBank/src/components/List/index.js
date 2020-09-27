import React from "react";
import Item from "../item/index";
import { ListItem } from "./style";

function List({ dataPhotos, openModal }) {
  return (
    <>
      <ListItem>
        {dataPhotos.map((item, index) => {
          return <Item key={index} item={item} openModal={openModal} />;
        })}
      </ListItem>
    </>
  );
}

export default List;
