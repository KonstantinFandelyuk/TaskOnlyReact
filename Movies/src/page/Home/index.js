import React, { useContext } from 'react';
import Slider from '../../components/Header/HeaderSlider/index';
import MoviesList from '../../components/MoviesList/index';
import Modal from '../../components/Modal/index.js';
import Paginator from '../../components/Paginator/index.js';
import { HomeBackground } from './style';
import { Context } from '../../context/Context';

const Home = () => {
  const { theme } = useContext(Context);

  return (
    <HomeBackground colorTheme={theme}>
      <main>
        <Slider />
      </main>
      <MoviesList />
      <Modal />
      <Paginator />
    </HomeBackground>
  );
};

export default Home;
