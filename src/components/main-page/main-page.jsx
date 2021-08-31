import React from "react";
import { Header } from "../header/header";
import { MainSlider } from "../main-slider/main-slider";
//import { PopularOffers } from "../popular-offers/popular-offers";
import { CategoryList } from "../category-list/category-list";
import { MobileAppInfo } from "../mobile-app-info/mobile-app-info";
import { OffersList } from "../offers-list/offers-list";
import { Partners } from "../partners/partners";
import { Footer } from "../footer/footer";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <MainSlider />
        <div className='container'>
          <div className='container__wrapper'>
            <div className='container__content'>
              <OffersList title='Популярное' />
              <CategoryList />
            </div>

            <div className='container__sidebar'>
              <div className='banner'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                nisi id totam ex aliquid incidunt deleniti quasi, tempora porro
                tempore et quaerat minima recusandae deserunt, rem labore
                maiores culpa libero?
              </div>
            </div>
          </div>
        </div>
        <MobileAppInfo />
        <OffersList title='Новинки' />
        <OffersList title='Новинки' />
        <Partners title='Партнеры' />
        <OffersList title='Лучшее по SOFT Skills' />
        <OffersList title='Повысить квалификацию' />
        <Partners title='Пройди у них практику' />
        <OffersList title='Лучшее по SOFT Skills' />
        <OffersList title='Повысить квалификацию' />
      </main>
      <Footer />
    </>
  );
};
