import React from "react";
import { Header } from "./header";
import { MainSlider } from "./main-slider";

export const MainPage = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <MainSlider />
      </main>
    </>
  );
};
