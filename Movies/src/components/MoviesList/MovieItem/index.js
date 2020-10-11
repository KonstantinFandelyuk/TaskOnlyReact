import React from "react";
import { switchDate, switchImageFront, switchImageBack } from "../../../helpers/CardItem";
import { FilmItem, FilmImage, FilmAverage, FilmName, FilmDate, FilmFavorite } from "./style";

function MovieItem({ item, openModalScreen, heart, addFavorite }) {
  return (
    <FilmItem className="flims-item">
      <FilmImage className="film-image">
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.poster_path}`}
          alt={`${item.name}`}
          onMouseEnter={(e) => {
            switchImageFront(e, item.backdrop_path);
          }}
          onMouseLeave={(e) => {
            switchImageBack(e, item.poster_path);
          }}
        />
      </FilmImage>
      <FilmAverage className="film-average">{item.vote_average}</FilmAverage>
      <FilmDate className="film-date">{switchDate(item.first_air_date)}</FilmDate>
      <FilmName
        className="film-name"
        onClick={(e) => {
          openModalScreen(item.id, item.vote_average, item.popularity);
        }}
      >
        {item.name}
      </FilmName>
      <FilmFavorite className="film-name">
        <img
          data-id={item.id}
          src="/images/icons/default.png"
          alt="избранное"
          onClick={(e) => {
            addFavorite(e, item.id);
          }}
        />
      </FilmFavorite>
    </FilmItem>
  );
}

export default MovieItem;
