import React, { useContext } from 'react';
import {
  switchDate,
  switchImageFront,
  switchImageBack,
  defaultNoImage,
} from '../../../helpers/helpers';
import { FilmItem, FilmImage, FilmAverage, FilmName, FilmDate, FilmFavorite } from './style';
import { Context } from '../../../context/Context';

const MovieItem = ({ item }) => {
  const { openModalScreen, addFavorite } = useContext(Context);
  return (
    <FilmItem>
      <FilmImage>
        <img
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`
              : defaultNoImage
          }
          alt={`${item.name}`}
          onMouseEnter={(e) => {
            switchImageFront(e, item.backdrop_path);
          }}
          onMouseLeave={(e) => {
            switchImageBack(e, item.poster_path);
          }}
        />
      </FilmImage>
      {item.vote_average > 0 ? (
        <FilmAverage average={item.vote_average * 10}>{item.vote_average}</FilmAverage>
      ) : null}
      <FilmDate>{switchDate(item.first_air_date)}</FilmDate>
      <FilmName
        onClick={(e) => {
          openModalScreen(item.id, item.vote_average, item.popularity);
        }}
      >
        {item.name}
      </FilmName>
      <FilmFavorite>
        <img
          data-id={item.id}
          src="/images/icons/default.png"
          alt="избранное"
          onClick={(e) => {
            addFavorite(e, item.id, item.name, item.poster_path, item.vote_average);
          }}
        />
      </FilmFavorite>
    </FilmItem>
  );
};

export default MovieItem;
