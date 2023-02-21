import React from "react";
import c from "./Favourites.module.scss";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import HotelItem from "../HotelItem/HotelItem";
const Favourites = () => {
  return (
    <div className={c.favourites}>
      <h1>Избранное</h1>
      <div className={c.favouritesFilter}>
        <div className={c.filterField}>
          <p>Рейтинг</p>
          <div className={c.filterSelector}>
            <HiChevronUp viewBox="0 -5 23 14" />
            <HiChevronDown viewBox="0 6 23 18" />
          </div>
        </div>
        <div className={c.filterField}>
          <p>Цена</p>
          <div className={c.filterSelector}>
            <HiChevronUp viewBox="0 -5 23 14" />
            <HiChevronDown viewBox="0 6 23 18" />
          </div>
        </div>
      </div>
      <div className={c.favouritesItems}>
        <HotelItem />
        <HotelItem />
        <HotelItem />
      </div>
    </div>
  );
};

export default Favourites;
