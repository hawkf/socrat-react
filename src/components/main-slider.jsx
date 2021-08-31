import React from "react";
import placeholder from "../img/main-slider-placeholder.jpg";

export function MainSlider() {
  return (
    <section className='main-slider'>
      <div className='main-slider__wrapper'>
        <h1 className='visually-hidden'>Sokrat — Тысячи знаний внутри</h1>

        <div className='swiper-container mySwiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img src={placeholder} alt='' />
            </div>
            <div className='swiper-slide'>
              <img src={placeholder} alt='' />
            </div>
            <div className='swiper-slide'>
              <img src={placeholder} alt='' />
            </div>
            <div className='swiper-slide'>
              <img src={placeholder} alt='' />
            </div>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
    </section>
  );
}
