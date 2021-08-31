import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/sokrat-logo.svg";

export function Header() {
  return (
    <header className='header'>
      <div className='top-bar'>
        <p className='top-bar__content'>
          Ищите знания
          <br />в приложении Sokrat.
        </p>

        <Link to='#' className='btn btn--pink'>
          Скачать
        </Link>
      </div>

      <div className='header__wrapper'>
        <div className='header__inner-wrapper'>
          <div className='logo'>
            <Link to='#' className='logo__link'>
              <img
                src={logo}
                alt='Sokrat Logo'
                className='logo__img'
                width='157'
                height='36'
              />
            </Link>
          </div>

          <div className='search'>
            <form
              className='search__form'
              role='search'
              method='get'
              id='search__form-header'
              action='#'
            >
              <label className='visually-hidden' htmlFor='search__input'>
                Поиск по курсам
              </label>
              <input
                className='search__input'
                id='search__input'
                type='text'
                placeholder='Поиск по курсам'
                name='s'
              />
              <button
                className='search__submit-btn'
                type='submit'
                id='search__submit-btn'
              >
                Найти
              </button>
            </form>
          </div>

          <div className='user'>
            <div className='user__bookmark'>
              <img
                src='img/bookmark-icon.svg'
                alt=''
                className='user__bookmark-img'
                width='16'
                height='21'
              />
              <span className='user__bookmark-indicator'></span>
            </div>
            <div className='user__login'>
              <p className='user__greeting'>
                Привет, <span className='user__name'>Друг</span>
              </p>
              <p className='user__text'>Что нового узнаем сегодня?</p>
            </div>
            <div className='user__photo'>
              <img
                src='img/camera-icon.svg'
                alt=''
                className='user__photo-img'
                width='16'
                height='14'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='main-nav'>
        <nav className='main-nav__wrapper'>
          <ul className='main-nav__list'>
            <li className='main-nav__item'>
              <a href='#' className='main-nav__link main-nav__link--active'>
                Все курсы
              </a>
            </li>
            <li className='main-nav__item'>
              <a href='#' className='main-nav__link'>
                Все практики
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
