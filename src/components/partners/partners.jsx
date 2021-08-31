import React from "react";
import { Link } from "react-router-dom";

const testArray = [1, 2, 3, 4, 5, 6];

export function Partners(props) {
  const { title } = props;
  return (
    <section className='partners'>
      <div className='partners__wrapper'>
        <h2 className='partners__title'>{title}</h2>

        <div className='partners__list'>
          {testArray.map((item) => {
            return (
              <div className='partners__item' key={item}>
                <Link to='#' className='partners__img-link'>
                  <img
                    src='../img/skillbox-logo.png'
                    alt='Партнер SkillBox'
                    className='partners__img'
                  />
                </Link>
              </div>
            );
          })}

          <div className='partners__btn-next'></div>
        </div>
      </div>
    </section>
  );
}
