import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { switchDate } from '../../../../../helpers/helpers';
import { Context } from '../../../../../context/Context';
import { Item, ItemName, ItemImage } from './style';

function SearchItem({ item }) {
  const { openSerchLink } = useContext(Context);
  return (
    <Item onClick={() => openSerchLink(item.id)}>
      <Link to={`/search-page/${item.id}`}>
        <ItemName>{`${item.name} ${switchDate(item.first_air_date)}`}</ItemName>
        <ItemImage>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
              item.poster_path ? item.poster_path : 'Нет фото'
            }`}
            alt=""
          />
        </ItemImage>
      </Link>
    </Item>
  );
}

export default SearchItem;
