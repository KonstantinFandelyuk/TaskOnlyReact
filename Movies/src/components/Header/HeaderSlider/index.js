import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Navigation } from 'swiper';
import './style.scss';

function HeaderSlider() {
  SwiperCore.use([EffectFade, Autoplay, Navigation]);
  return (
    <div className="header-slider">
      <Swiper
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        // autoplay={true}
        effect="fade"
      >
        <SwiperSlide>
          <img src="/images/slider/expendables.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/pirate.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/ganster.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/rembo.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderSlider;
