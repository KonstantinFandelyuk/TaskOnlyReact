import React from "react";
import { ModalElement, ModalBG, TopBlock, ModalClose, TopBlockItem, Text } from "./style";
import { sliceDate } from "../../helpers/CardItem";

function Modal({ oepnModal, modalData, closeModal }) {
  return (
    <ModalElement className={`modal ${oepnModal}`} active={oepnModal}>
      <ModalBG>
        <TopBlock image={modalData.backdrop_path}>
          <TopBlockItem first="true">
            <img
              src={`https://image.tmdb.org/t/p/w500/${modalData.poster_path}`}
              alt={`${modalData.name}`}
            />
          </TopBlockItem>
          <TopBlockItem>
            <Text title="true">
              {modalData.name}({sliceDate(modalData.first_air_date)})
            </Text>
            <Text>Рейтинг {modalData.vote_average}</Text>
            <ul>
              {modalData.genres
                ? modalData.genres.map((item, index) => <li key={index}>{item.name}</li>)
                : ""}
            </ul>
            <Text>
              {modalData.overview
                ? modalData.overview
                : "Извините к сожалению описание к данному фильму отсутствует"}
            </Text>
          </TopBlockItem>
        </TopBlock>
        <div className="modal-card">
          <div className="modal-card__list">
            <div className="modal-card__list-item">
              <div className="card-image">
                <img src="" alt={oepnModal.name} />
              </div>
            </div>
          </div>
        </div>
        <ModalClose
          onClick={() => {
            closeModal();
          }}
        >
          X
        </ModalClose>
      </ModalBG>
    </ModalElement>
  );
}

export default Modal;

// backdrop_path: "/7pCIWCBrsgB8tLBb4WRdhp1OtR7.jpg"
// created_by: [{…}]
// episode_run_time: [60]
// first_air_date: "2020-09-06"
// genres: (2) [{…}, {…}]
// homepage: "https://www.starz.com/us/en/series/58002"
// id: 97890
// in_production: true
// languages: ["en"]
// last_air_date: "2020-09-27"
// last_episode_to_air: {air_date: "2020-09-27", episode_number: 4, id: 2386759, name: "Принц", overview: "После того, как Моне согласился вести с ним дела, … чтобы контролировать рынок наркотиков в кампусе.", …}
// name: "Власть в ночном городе. Книга вторая: Призрак"
// networks: [{…}]
// next_episode_to_air: {air_date: "2020-10-04", episode_number: 5, id: 2386760, name: "Дар волхвов", overview: "", …}
// number_of_episodes: 5
// number_of_seasons: 1
// origin_country: ["US"]
// original_language: "en"
// original_name: "Power Book II: Ghost"
// overview: "Тарик ищет себя и пытается избавиться от гнетущего наследия отца."
// popularity: 181.147
// poster_path: "/qBbi9VH988dBqNLhlMakTffB9Bv.jpg"
// production_companies: (4) [{…}, {…}, {…}, {…}]
// rating: 9.1
// seasons: [{…}]
// status: "Returning Series"
// type: "Scripted"
// vote_average: 8.7
// vote_count: 21
// __proto__: Object
