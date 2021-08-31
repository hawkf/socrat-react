import React from "react";
import { Link } from "react-router-dom";

const testArray = [1, 2, 3, 4, 5, 6];

export function CategoryList() {
  return (
    <section className='category'>
      <div className='category__wrapper'>
        <div className='category__heading-wrapper'>
          <h2 className='category__title'>Мои категории</h2>
          <Link to='#' className='category__all-link'>
            Посмотреть все
          </Link>
        </div>

        <div className='category__list'>
          {testArray.map((item) => {
            return (
              <div className='category__item' key={item}>
                <Link to='#' className='category__img-link'>
                  <img
                    src='img/category-placeholder.jpg'
                    alt=''
                    className='category__img'
                  />
                </Link>
                <p className='category__item-title'>
                  <Link to='#' className='category__title-link'>
                    Блокчейн
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
