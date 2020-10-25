import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { SlideImage, SlideText } from './style';
import { defaultNoImage } from '../../helpers/helpers';
import './style.scss';
import 'swiper/components/pagination/pagination.scss';

function Slider({ listData }) {
  SwiperCore.use([Pagination]);
  return (
    <div className="slider">
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={3}
        spaceBetween={10}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        effect="slide"
      >
        {listData.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideImage>
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : defaultNoImage
                }
                alt={`${item.name}`}
              />
            </SlideImage>
            <SlideText>
              {item.name} эпизод {item.episode_count}
            </SlideText>
            <SlideText>Дата выхода {item.air_date}</SlideText>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
