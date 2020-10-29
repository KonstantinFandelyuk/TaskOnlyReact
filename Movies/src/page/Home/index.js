import React, { useState, useEffect } from 'react';
import { getData, getDescriptionData, getSearchResult, getPersonalActor } from '../../api/api.js';
import Slider from '../../components/Header/HeaderSlider/index';
import MoviesList from '../../components/MoviesList/index';
import Modal from '../../components/Modal/index.js';
import Header from '../../components/Header/index';
import Paginator from '../../components/Paginator/index.js';
import { Context } from '../../context/Context';
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
  const [page, setPage] = useState({ start: 1, end: 0 });
  const [actorsData, setActorsDatta] = useState([]);

  const getActorList = async () => {
    const data = await getPersonalActor(language, page.start);
    if (data !== undefined) {
      setActorsDatta(data.results);
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
    const searchMovies = async () => {
      const data = await getSearchResult(searchText, language);
      if (data !== undefined) {
        setSearchDataList(data.results);
      } else {
        console.log('Мы не получили данных');
      }
    };
    searchMovies();
  }, [searchText, language]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(category, language, page.start);
      if (data !== undefined) {
        setMovies(data.results);
        setPage({ ...page, start: data.page, end: data.total_pages });
      } else {
        console.log('Мы не получили данных');
      }
    };
    getMovies();
    getActorList();
  }, [category, language, page.start]);

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

  const nextPage = () => {
    if (page.end > page.start) setPage({ ...page, start: page.start + 1 });
  };

  const PrevPage = () => {
    if (page.start > 1) {
      setPage({ ...page, start: Math.max(0, page.start - 1) });
    }
  };
  return (
    <Context.Provider
      value={{
        switchLanguage,
        openModalScreen,
        setToggleFavorite,
        setSearchText,
        switchCategory,
        favoriteData,
        toggleFavorite,
        searcDataList,
      }}
    >
      <div className="home">
        <Header />
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
        <Paginator nextPage={nextPage} PrevPage={PrevPage} page={page} />
      </div>
    </Context.Provider>
  );
}

export default Home;
