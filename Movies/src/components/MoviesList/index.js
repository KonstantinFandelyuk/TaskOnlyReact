import React, { useContext } from 'react';
import MovieItem from './MovieItem/index';
import { H2Title, FilmsList } from './style';
import { Context } from '../../context/Context';

const MoviesList = () => {
  const { movies, titleCategory } = useContext(Context);
  return (
    <section className="section">
      <div className="container">
        <H2Title>{titleCategory}</H2Title>
        <div className="films">
          <FilmsList className="films-list">
            {movies.map((item, index) => {
              return <MovieItem key={index} item={item} />;
            })}
          </FilmsList>
        </div>
      </div>
    </section>
  );
};

export default MoviesList;
