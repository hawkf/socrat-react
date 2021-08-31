import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__left-col'>
          <div className='footer__col-wrapper'>
            <div className='footer__nav-wrapper'>
              <p className='footer__nav-title'>Пользователям</p>
              <ul className='footer__nav-list'>
                <li className='footer__nav-item'>
                  <Link to='#' className='footer__nav-link'>
                    Все курсы
                  </Link>
                </li>
                <li className='footer__nav-item'>
                  <Link to='#' className='footer__nav-link'>
                    Консультант
                  </Link>
                </li>
                <li className='footer__nav-item'>
                  <Link to='#' className='footer__nav-link'>
                    Оплата обучения
                  </Link>
                </li>
              </ul>
            </div>

            <div className='footer__nav-wrapper'>
              <p className='footer__nav-title'>Партнерам</p>
              <ul className='footer__nav-list'>
                <li className='footer__nav-item'>
                  <Link to='#' className='footer__nav-link'>
                    Как это работает?
                  </Link>
                </li>
                <li className='footer__nav-item'>
                  <Link to='#' className='footer__nav-link'>
                    Подключиться
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='socials'>
            <p className='socials__title'>Мы в социальных сетях</p>
            <ul className='socials__list'>
              <li className='socials__item'>
                <span className='visually-hidden'>Ссылка на инстаграм</span>
                <Link to='#' className='socials__link'>
                  <svg
                    className='socials__icon socials__icon--instagram'
                    width='31'
                    height='31'
                  >
                    <use xlinkHref='#icon-instagram'></use>
                  </svg>
                </Link>
              </li>
              <li className='socials__item'>
                <span className='visually-hidden'>Фейсбук</span>
                <Link to='#' className='socials__link'>
                  <svg
                    className='socials__icon socials__icon--facebook'
                    width='31'
                    height='31'
                  >
                    <use xlinkHref='#icon-facebook'></use>
                  </svg>
                </Link>
              </li>
              <li className='socials__item'>
                <span className='visually-hidden'>Ссылка на ВКонтакте</span>
                <Link to='#' className='socials__link'>
                  <svg
                    className='socials__icon socials__icon--vk'
                    width='31'
                    height='31'
                  >
                    <use xlinkHref='#icon-vk'></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='footer__right-col'>
          <div className='logo logo--footer'>
            <Link to='#' className='logo__link'>
              <img
                src='../img/sokrat-logo.svg'
                alt='Sokrat Logo'
                className='logo__img--footer'
                width='223'
                height='51'
              />
            </Link>

            <p className='logo__text'>Тысячи знаний внутри</p>
          </div>

          <div className='download'>
            <p className='download__title'>Скачай на свой телефон</p>
            <div className='download__btn-wrapper'>
              <Link
                to='#'
                className='download__btn-link download__btn-link--appstore'
              >
                <img
                  src='../img/app-store-btn.svg'
                  alt='Скачать с App Store'
                  className='download__btn-appstore-img'
                  width='135'
                  height='45'
                />
              </Link>

              <Link
                to='#'
                className='download__btn-link download__btn-link--gplay'
              >
                <img
                  src='img/google-play-btn.svg'
                  alt='Скачать Google Play'
                  className='download__btn-gplay-img'
                  width='152'
                  height='45'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar__wrapper'>
          <ul className='bottom-bar__nav-list'>
            <li className='bottom-bar__nav-item'>
              <Link to='#' className='bottom-bar__nav-link'>
                Условия использования
              </Link>
            </li>
            <li className='bottom-bar__nav-item'>
              <Link to='#' className='bottom-bar__nav-link'>
                Политика конфиденциальности
              </Link>
            </li>
          </ul>

          <p className='bottom-bar__copyright'>
            © <span className='bottom-bar__copyright-year'>2021</span> Sokrat.
            Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
