import React from "react";
import { Link } from "react-router-dom";

export function MobileAppInfo() {
  return (
    <section className='cta'>
      <h2 className='visually-hidden'>
        Скачайте приложение Sokrat в Google play или App Store
      </h2>
      <div className='cta__wrapper'>
        <div className='cta__content-wrapper'>
          <p className='cta__title'>Удобнее искать знания в приложении</p>
          <p className='cta__text'>
            Скачайте мобильное приложение Sokrat., чтобы иметь самый быстрый
            доступ к новым курсам.
          </p>

          <div className='cta__download-btn'>
            <Link
              to='#'
              className='cta__download-btn-link cta__download-btn-link--appstore'
            >
              <img
                src='img/app-store-btn.svg'
                alt='Скачать с App Store'
                className='cta__btn-appstore-img'
                width='135'
                height='45'
              />
            </Link>

            <Link
              to='#'
              className='cta__download-btn-link cta__download-btn-link--gplay'
            >
              <img
                src='img/google-play-btn.svg'
                alt='Скачать Google Play'
                className='cta__btn-gplay-img'
                width='152'
                height='45'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
