import React from "react";
import { Link } from "react-router-dom";

const testArray = [1, 2, 3, 4];

export function OffersList(props) {
  const { title } = props;
  return (
    <section className='carousel carousel--full'>
      <div className='carousel__wrapper'>
        <h2 className='carousel__title'>{title}</h2>
        <div className='carousel__list'>
          {testArray.map((item) => {
            return (
              <div className='carousel__item' key={item}>
                <Link to='#' className='carousel__img-link'>
                  <img
                    src='img/slider-placeholder.jpg'
                    alt=''
                    className='carousel__img'
                  />
                  <div className='carousel__item-info'>
                    <p className='carousel__item-price'>700 000 ₽</p>
                    <p className='carousel__item-duration'>23 месяца</p>
                  </div>
                  <p className='carousel__item-title'>
                    Философия искусственного интеллекта Философия искусственного
                  </p>
                </Link>
                <Link to='#' className='carousel__item-btn'>
                  Подробнее
                </Link>
              </div>
            );
          })}

          <div className='carousel__btn-next'></div>
          <div className='carousel__btn-prev'></div>
        </div>
      </div>
    </section>
  );
}
