import React, { useContext } from 'react';
import FavoriteItem from './FavoriteItem/index';
import { Context } from '../../../context/Context';
import { Favorite, FavoriteBG, FavoriteTitle, ModalClose } from './style';

const FavoriteList = () => {
  const { favoriteData, setToggleFavorite } = useContext(Context);
  console.log('favoriteData :>> ', favoriteData);
  return (
    <Favorite>
      <FavoriteBG>
        <ModalClose onClick={() => setToggleFavorite(false)}>X</ModalClose>
        <FavoriteTitle>Ваш список избранного</FavoriteTitle>
        <ul>
          {favoriteData.length === 0 ? (
            <li>Упс а избранного нет :( .... </li>
          ) : (
            favoriteData.map((item, index) => <FavoriteItem item={item} key={index} />)
          )}
        </ul>
      </FavoriteBG>
    </Favorite>
  );
};

export default FavoriteList;
