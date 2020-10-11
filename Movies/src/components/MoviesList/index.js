import React from "react";
import MovieItem from "./MovieItem/index";
import { H2Title, FilmsList } from "./style";

function MoviesList({ movies, openModalScreen, titleCategory, addFavorite }) {
  return (
    <section className="section">
      <div className="container">
        <H2Title>{titleCategory}</H2Title>
        <div className="films">
          <FilmsList className="films-list">
            {movies.map((item, index) => {
              return (
                <MovieItem
                  key={index}
                  item={item}
                  openModalScreen={openModalScreen}
                  addFavorite={addFavorite}
                />
              );
            })}
          </FilmsList>
        </div>
      </div>
    </section>
  );
}

export default MoviesList;
