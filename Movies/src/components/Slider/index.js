import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper";
// import { DefaultImage, HeroTitle } from "./style";
// import "swiper/swiper.scss";
import "./style.scss";
import "swiper/components/navigation/navigation.scss";

function Slider() {
  SwiperCore.use([EffectFade, Autoplay, Navigation]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}
        effect="fade"
      >
        <SwiperSlide>
          <img src="/images/slider/wallpeper.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/wallpeper2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/wallpeper3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/wallpeper4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
