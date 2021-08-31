import React from "react";
import { OffersList } from "../offers-list/offers-list";

export function PopularOffers() {
  return (
    <section class='carousel carousel--popular'>
      <div class='carousel__wrapper'>
        <h2 class='carousel__title'>Популярное</h2>
        <OffersList />
      </div>
    </section>
  );
}
