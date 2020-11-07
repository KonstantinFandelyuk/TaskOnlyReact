import React, { useContext } from 'react';
import { defaultNoImage } from '../../../../helpers/helpers';
import { Item, ItemImage, ItemAverage } from './style';
import { Context } from '../../../../context/Context';

const FavoriteItem = ({ item }) => {
  const { dellFavorite } = useContext(Context);
  return (
    <Item>
      <ItemAverage>{item.average}</ItemAverage>
      <div>{item.name}</div>
      <ItemImage>
        <img
          src={
            item.image
              ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.image}`
              : defaultNoImage
          }
          alt={`${item.name}`}
        />
      </ItemImage>
      <button onClick={() => dellFavorite(item.id)}>Dell</button>
    </Item>
  );
};

export default FavoriteItem;
