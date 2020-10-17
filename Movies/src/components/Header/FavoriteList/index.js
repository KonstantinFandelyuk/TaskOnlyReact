import React from "react";
import FavoriteItem from "./FavoriteItem/index";
import { itemsArray } from "../../../helpers/helpers";
import { Favorite, FavoriteBG, FavoriteTitle, ModalClose } from "./style";

const FavoriteList = ({ setSwitchFavorite }) => {
  return (
    <Favorite>
      <FavoriteBG>
        <ModalClose onClick={() => setSwitchFavorite(false)}>X</ModalClose>
        <FavoriteTitle>Ваш список избранного</FavoriteTitle>
        <ul>
          {itemsArray.length === 0 ? (
            <li>Упс а избранного нет :( .... </li>
          ) : (
            itemsArray.map((item, index) => <FavoriteItem item={item} key={index} />)
          )}
        </ul>
      </FavoriteBG>
    </Favorite>
  );
};

export default FavoriteList;
