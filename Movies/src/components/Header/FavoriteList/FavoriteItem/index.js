import React from 'react';
import { defaultNoImage } from '../../../../helpers/helpers';
import { Item, ItemImage, ItemAverage } from './style';

const FavoriteItem = ({ item }) => {
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
    </Item>
  );
};

export default FavoriteItem;
