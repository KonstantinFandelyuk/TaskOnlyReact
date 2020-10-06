import React from "react";
import MovieItem from "./MovieItem/index";
import { H2Title, FilmsList } from "./style";

function MoviesList({ movies, openModalScreen }) {
  return (
    <section className="section">
      <div className="container">
        <H2Title>Сериалы в эфире сегодня</H2Title>
        <div className="films">
          <FilmsList className="films-list">
            {movies.map((item, index) => {
              return <MovieItem key={index} item={item} openModalScreen={openModalScreen} />;
            })}
          </FilmsList>
        </div>
      </div>
    </section>
  );
}

export default MoviesList;
