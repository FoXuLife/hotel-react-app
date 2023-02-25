import React, { useState } from "react";
import c from "./Favourites.module.scss";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import HotelItem from "../HotelItem/HotelItem";
import { useDispatch, useSelector } from "react-redux";
import { sortHotel } from "redux/reducers/hotelReducer";
const Favourites = () => {
  const [ratinFilter, setRatinFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState(0);
  const hotelsFavorite = useSelector(
    (store) => store?.hotelReducer?.hotelsFavorite
  );
  const filterHotel = (viewFilter, filterState, setFilter) => {
    filterState >= 1
      ? setFilter(-1)
      : filterState <= -1
      ? setFilter(0)
      : setFilter(1);
    dispatch(sortHotel(viewFilter, filterState));
  };
  const dispatch = useDispatch();
  return (
    <div className={c.favourites}>
      <h1>Избранное</h1>
      <div className={c.favouritesFilter}>
        <div
          className={`${c.filterField} ${ratinFilter !== 0 && c.active} ${
            ratinFilter === -1 && c.decActive
          }  ${ratinFilter === 1 && c.incActive}`}
          onClick={() => {
            filterHotel("ratinFilter", ratinFilter, setRatinFilter);
          }}
        >
          <p>Рейтинг</p>
          <div className={c.filterSelector}>
            <HiChevronUp viewBox="0 -5 23 14" />
            <HiChevronDown viewBox="0 6 23 18" />
          </div>
        </div>
        <div
          className={`${c.filterField} ${priceFilter !== 0 && c.active} ${
            priceFilter === -1 && c.decActive
          }  ${priceFilter === 1 && c.incActive}`}
          onClick={() => {
            filterHotel("priceFilter", priceFilter, setPriceFilter);
          }}
        >
          <p>Цена</p>
          <div className={c.filterSelector}>
            <HiChevronUp viewBox="0 -5 23 14" />
            <HiChevronDown viewBox="0 6 23 18" />
          </div>
        </div>
      </div>
      <div className={c.favouritesItems}>
        {hotelsFavorite[0] ? (
          hotelsFavorite.map((e) => {
            return (
              <HotelItem
                name={e.name}
                id={e.hotelId}
                stars={e.stars}
                priceFrom={e.priceFrom}
                date={e.date}
                countDays={e.countDays}
                isFavorite={e.isFavorite}
                key={e.hotelId}
              />
            );
          })
        ) : (
          <p className={c.placeholder}>Вы пока не добавляли отели </p>
        )}
      </div>
    </div>
  );
};

export default Favourites;
