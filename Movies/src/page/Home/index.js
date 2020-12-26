import React from 'react';
import Slider from '../../components/Header/HeaderSlider/index';
import MoviesList from '../../components/MoviesList/index';
import Modal from '../../components/Modal/index.js';
import Paginator from '../../components/Paginator/index.js';
import { HomePage } from './style';

const Home = () => {
  return (
    <HomePage>
      <main>
        <Slider />
      </main>
      <MoviesList />
      <Modal />
      <Paginator />
    </HomePage>
  );
};

export default Home;
