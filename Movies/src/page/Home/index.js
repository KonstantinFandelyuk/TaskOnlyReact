import React, { useState, useEffect } from "react";
import { getData, getDescriptionData, getSearchResult } from "../../api/api.js";
import Slider from "../../components/Slider/index";
import MoviesList from "../../components/MoviesList/index";
import Modal from "../../components/Modal/index.js";
import Header from "../../components/Header/index";
import { itemsArray } from "../../helpers/helpers";
import "./style.scss";

const favoriteTemplate = { name: "", src: "", id: "" };

function Home() {
  const [language, setLanguage] = useState("ru-RU");
  const [movies, setMovies] = useState([]);
  const [modalData, setModalData] = useState({});
  const [oepnModal, setOpenModal] = useState("");
  const [category, setCateory] = useState("airing_today");
  const [titleCategory, setTitleCategory] = useState("Сериалы в эфире сегодня");
  const [searchText, setSearchText] = useState("");
  const [searcDataList, setSearchDataList] = useState([]);
  const [switchFavorite, setSwitchFavorite] = useState(false);

  const searchMovies = async () => {
    const data = await getSearchResult(searchText, language);
    if (data !== undefined) {
      setSearchDataList(data.results);
    } else {
      console.log("Мы не получили данных");
    }
  };
  useEffect(() => {
    searchMovies();
  }, [searchText, language]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(category, language);
      if (data !== undefined) {
        setMovies(data.results);
      } else {
        console.log("Мы не получили данных");
      }
    };
    getMovies();
  }, [category, language]);

  const switchCategory = (category, title) => {
    setCateory(category);
    setTitleCategory(title);
  };

  const switchLanguage = (ln) => {
    setLanguage(ln);
  };
  const openSerchLink = async (id) => {
    // const data = await getDescriptionData(id, language);
  };

  const openModalScreen = async (id, average, popularity) => {
    const data = await getDescriptionData(id, language);
    if (data !== undefined) {
      const newModal = { ...data, rating: average, popularity: popularity };
      setModalData(newModal);
      setOpenModal("active");
    } else {
      console.log("Мы не получили данных");
    }
  };

  const closeModal = () => {
    setOpenModal("");
  };

  const addFavorite = (e, id, name, image, average) => {
    if (+id === +e.target.dataset.id && !e.target.classList.contains("favorite")) {
      itemsArray.push({ name: name, image: image, id: id, average: average });
      localStorage.setItem("items", JSON.stringify(itemsArray));
      e.target.classList.add("favorite");
      e.target.src = "/images/icons/active.png";
    } else {
      e.target.classList.remove("favorite");
      e.target.src = "/images/icons/default.png";
    }
  };
  return (
    <div className="home">
      <Header
        switchCategory={switchCategory}
        switchLanguage={switchLanguage}
        setSearchText={setSearchText}
        searcDataList={searcDataList}
        switchFavorite={switchFavorite}
        setSwitchFavorite={setSwitchFavorite}
        openModalScreen={openModalScreen}
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
