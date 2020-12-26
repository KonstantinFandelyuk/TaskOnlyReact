import React, { useContext } from 'react';
import {
  ModalElement,
  ModalBG,
  TopBlock,
  ModalClose,
  TopBlockItem,
  Text,
  GenresContainer,
  GenresItem,
} from './style';
import Slider from '../Slider/index';
import { sliceDate, defaultNoImage } from '../../helpers/helpers';
import { Context } from '../../context/Context';

function Modal() {
  const { oepnModal, modalData, closeModal } = useContext(Context);
  return (
    <ModalElement className={`modal ${oepnModal}`} active={oepnModal}>
      <ModalBG>
        <TopBlock image={modalData.backdrop_path}>
          <TopBlockItem first="true">
            <img
              src={
                modalData.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${modalData.poster_path}`
                  : defaultNoImage
              }
              alt={`${modalData.name}`}
            />
          </TopBlockItem>
          <TopBlockItem>
            <Text title="true">
              {modalData.name}({sliceDate(modalData.first_air_date)})
            </Text>
            <Text>Рейтинг {modalData.vote_average}</Text>
            <GenresContainer>
              {modalData.genres
                ? modalData.genres.map((item, index) => (
                    <GenresItem key={index}>{item.name}</GenresItem>
                  ))
                : ''}
            </GenresContainer>
            <Text>
              {modalData.overview
                ? modalData.overview
                : 'Извините к сожалению описание к данному фильму отсутствует'}
            </Text>
            <div className="season">
              <Text>Сезоны</Text>
              {modalData.seasons && <Slider listData={modalData.seasons} />}
            </div>
          </TopBlockItem>
        </TopBlock>
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

// air_date: "2015-10-04"
// episode_count: 38
// id: 70218
// name: "Спецматериалы"
// overview: ""
// poster_path: "/nlFKhmcDK0JVmvqvxqmOeRZsJVU.jpg"
// season_number: 0
