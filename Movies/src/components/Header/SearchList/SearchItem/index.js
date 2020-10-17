import React from "react";
import { switchDate } from "../../../../helpers/helpers";
import { Item, ItemName, ItemImage } from "./style";

function SearchItem({ item, openModalScreen }) {
  return (
    <>
      <Item onClick={() => openModalScreen(item.id, item.vote_average, item.popularity)}>
        <ItemName>{`${item.name} ${switchDate(item.first_air_date)}`}</ItemName>
        <ItemImage>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
              item.poster_path !== "" ? item.poster_path : "Блядь там пусто"
            }`}
            alt=""
          />
        </ItemImage>
      </Item>
    </>
  );
}

export default SearchItem;
