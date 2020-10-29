import React from 'react';
// import { getData, getDescriptionData, getSearchResult, getPersonalActor } from '../../api/api.js';
import Slider from '../../components/Header/HeaderSlider/index';
import MoviesList from '../../components/MoviesList/index';
import Modal from '../../components/Modal/index.js';
import Paginator from '../../components/Paginator/index.js';
// import { Context } from '../../context/Context';
import './style.scss';

const Home = () => {
  return (
    <div className="home">
      <main>
        <Slider />
      </main>
      <MoviesList />
      <Modal />
      <Paginator />
    </div>
  );
};

export default Home;
