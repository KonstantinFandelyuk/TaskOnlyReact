import React, { useState, useEffect } from "react";
import { getData, getDescriptionData, getSearchResult } from "./api/api.js";
import Routers from "./router/index";
import { Context, SearchPageProvider } from "./context/Context";
// import { SearchPageProvider } from './context/SearchPageProvider';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/style";

function App() {
  const [language, setLanguage] = useState("ru-RU");
  const [page, setPage] = useState({ start: 1, end: 0 });
  const [movies, setMovies] = useState([]);
  const [modalData, setModalData] = useState({});
  const [oepnModal, setOpenModal] = useState("");
  const [category, setCateory] = useState("airing_today");
  const [titleCategory, setTitleCategory] = useState("Сериалы в эфире сегодня");
  const [searchText, setSearchText] = useState("");
  const [searcDataList, setSearchDataList] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [toggleFavorite, setToggleFavorite] = useState(false);
  const [searchItem, setSearchItem] = useState({});
  const [token, setToken] = useState(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    setFavoriteData(itemsArray);
  }, []);

  useEffect(() => {
    const searchMovies = async () => {
      const data = await getSearchResult(searchText, language);
      if (data !== undefined) {
        setSearchDataList(data.results);
      } else {
        console.log("Мы не получили данных");
      }
    };
    searchMovies();
  }, [searchText, language]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getData(category, language, page.start);
      if (data) {
        console.log("data :>> ", data);
        setMovies(data.results);
        setPage({ ...page, start: data.page, end: data.total_pages });
      } else {
        console.log("Мы не получили данных");
      }
    };
    getMovies();
  }, [category, language, page.start]);

  const switchCategory = (category, title) => {
    setCateory(category);
    setTitleCategory(title);
  };

  // Делаю смену языка
  const switchLanguage = (ln) => {
    setLanguage(ln);
  };

  // Открываю модальное окно
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

  // Закрываю модальное окно
  const closeModal = () => {
    setOpenModal("");
  };

  // Добавляю фильмы в избранное и в локал сторедж
  const addFavorite = (e, id, name, image, average) => {
    const itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    if (+id === +e.target.dataset.id && !e.target.classList.contains("favorite")) {
      itemsArray.push({ name: name, image: image, id: id, average: average });
      localStorage.setItem("items", JSON.stringify(itemsArray));
      setFavoriteData((prev) => [...prev, { name: name, image: image, id: id, average: average }]);
      e.target.classList.add("favorite");
      e.target.src = "/images/icons/active.png";
    } else {
      e.target.classList.remove("favorite");
      e.target.src = "/images/icons/default.png";
    }
  };

  const dellFavorite = (id) => {
    localStorage.removeItem("items");
    const newFavortit = favoriteData.filter((item) => item.id !== id).map((item) => item);
    localStorage.setItem("items", JSON.stringify(newFavortit));
    setFavoriteData(newFavortit);
    return newFavortit;
  };

  const nextPage = () => {
    if (page.end > page.start) setPage({ ...page, start: page.start + 1 });
  };

  const PrevPage = () => {
    if (page.start > 1) {
      setPage({ ...page, start: Math.max(0, page.start - 1) });
    }
  };

  const switchTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // FixMe:!!!!
  const openSerchLink = async (id) => {
    const data = await getDescriptionData(id, language);
    if (data !== undefined) {
      setSearchItem(data);
      setSearchDataList([]);
      setSearchText("");
    } else {
      console.log("Мы не получили данных");
    }
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <SearchPageProvider.Provider>
        <Context.Provider
          value={{
            switchLanguage,
            openModalScreen,
            setToggleFavorite,
            setSearchText,
            searchText,
            switchCategory,
            addFavorite,
            favoriteData,
            toggleFavorite,
            searcDataList,
            language,
            page,
            PrevPage,
            nextPage,
            closeModal,
            oepnModal,
            titleCategory,
            modalData,
            movies,
            switchTheme,
            theme,
            token,
            setToken,
            dellFavorite,
            openSerchLink,
            searchItem,
            setPage,
          }}
        >
          <GlobalStyle />
          <Routers />
        </Context.Provider>
      </SearchPageProvider.Provider>
    </ThemeProvider>
  );
}

export default App;
