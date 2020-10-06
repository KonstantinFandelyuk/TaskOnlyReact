import React, { useState, useEffect } from "react";
import { getData, getDescriptionData } from "../../api/api.js";
import Slider from "../../components/Slider/index";
import MoviesList from "../../components/MoviesList/index";
import Modal from "../../components/Modal/index.js";
import "./style.scss";

function Home() {
  const [movies, setMovies] = useState([]);
  const [modalData, setModalData] = useState({});
  const [oepnModal, setOpenModal] = useState("");

  const getMovies = async () => {
    const data = await getData();
    if (data !== undefined) {
      setMovies(data.results);
    } else {
      console.log("Мы не получили данных");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const openModalScreen = async (id, average, popularity) => {
    const data = await getDescriptionData(id);
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

  return (
    <div className="home">
      <main>
        <Slider />
      </main>
      <MoviesList movies={movies} openModalScreen={openModalScreen} />
      <Modal oepnModal={oepnModal} modalData={modalData} closeModal={closeModal} />
    </div>
  );
}

export default Home;
