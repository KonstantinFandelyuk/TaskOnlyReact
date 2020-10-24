import React, { useState, useEffect } from 'react';
import { getData, getDescriptionData, getSearchResult } from '../../api/api.js';
import Slider from '../../components/Slider/index';
import MoviesList from '../../components/MoviesList/index';
import Modal from '../../components/Modal/index.js';
import Header from '../../components/Header/index';
import './style.scss';

function Home() {
  const [language, setLanguage] = useState('ru-RU');
  const [movies, setMovies] = useState([]);
  const [modalData, setModalData] = useState({});
  const [oepnModal, setOpenModal] = useState('');
  const [category, setCateory] = useState('airing_today');
  const [titleCategory, setTitleCategory] = useState('Сериалы в эфире сегодня');
  const [searchText, setSearchText] = useState('');
  const [searcDataList, setSearchDataList] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [toggleFavorite, setToggleFavorite] = useState(false);

  const searchMovies = async () => {
    const data = await getSearchResult(searchText, language);
    if (data !== undefined) {
      setSearchDataList(data.results);
    } else {
      console.log('Мы не получили данных');
    }
  };

  useEffect(() => {
    const itemsArray = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [];
    setFavoriteData(itemsArray);
  }, []);

  useEffect(() => {
    searchMovies();
  }, [searchText, language]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(category, language);
      if (data !== undefined) {
        setMovies(data.results);
      } else {
        console.log('Мы не получили данных');
      }
    };
    getMovies();
  }, [category, language]);

  const switchCategory = (category, title) => {
    setCateory(category);
    setTitleCategory(title);
  };

  // Делаю смену языка
  const switchLanguage = (ln) => {
    setLanguage(ln);
  };

  const openSerchLink = async (id) => {
    // const data = await getDescriptionData(id, language);
  };

  // Открываю модальное окно
  const openModalScreen = async (id, average, popularity) => {
    const data = await getDescriptionData(id, language);
    if (data !== undefined) {
      const newModal = { ...data, rating: average, popularity: popularity };
      setModalData(newModal);
      setOpenModal('active');
    } else {
      console.log('Мы не получили данных');
    }
  };

  // Закрываю модальное окно
  const closeModal = () => {
    setOpenModal('');
  };

  // Добавляю фильмы в избранное и в локал сторедж
  const addFavorite = (e, id, name, image, average) => {
    const itemsArray = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [];
    if (+id === +e.target.dataset.id && !e.target.classList.contains('favorite')) {
      itemsArray.push({ name: name, image: image, id: id, average: average });
      localStorage.setItem('items', JSON.stringify(itemsArray));
      setFavoriteData((prev) => [...prev, { name: name, image: image, id: id, average: average }]);
      e.target.classList.add('favorite');
      e.target.src = '/images/icons/active.png';
    } else {
      e.target.classList.remove('favorite');
      e.target.src = '/images/icons/default.png';
    }
  };

  return (
    <div className="home">
      <Header
        switchCategory={switchCategory}
        switchLanguage={switchLanguage}
        setSearchText={setSearchText}
        searcDataList={searcDataList}
        toggleFavorite={toggleFavorite}
        setToggleFavorite={setToggleFavorite}
        openModalScreen={openModalScreen}
        favoriteData={favoriteData}
      />
      <main>
        <Slider />
      </main>
      <MoviesList
        movies={movies}
        openModalScreen={openModalScreen}
        titleCategory={titleCategory}
        addFavorite={addFavorite}
      />
      <Modal oepnModal={oepnModal} modalData={modalData} closeModal={closeModal} />
    </div>
  );
}

export default Home;
