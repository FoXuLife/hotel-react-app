import React, { useEffect, useState } from "react";
import c from "./Favourites.module.scss";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import HotelItem from "../HotelItem/HotelItem";
import { useDispatch, useSelector } from "react-redux";
import { sortHotel } from "redux/reducers/hotelReducer";
const Favourites = () => {
  const [filterState, setfilterStateFilter] = useState();
  const [viewFilters, setViewFilters] = useState();
  const hotelsFavorite = useSelector(
    (store) => store?.hotelReducer?.hotelsFavorite
  );
  const dispatch = useDispatch();
  const filterHotel = (viewFilter) => {
    if (viewFilter === viewFilters) {
      filterState >= 1
        ? setfilterStateFilter(-1)
        : filterState <= -1
        ? setfilterStateFilter(0)
        : setfilterStateFilter(1);
    } else {
      1 && setViewFilters(viewFilter);
      1 && setfilterStateFilter(1);
    }
  };
  useEffect(() => {
    dispatch(sortHotel(viewFilters, filterState));
  }, [dispatch, viewFilters, filterState]);

  return (
    <div className={c.favourites}>
      <h1>Избранное</h1>
      <div className={c.favouritesFilter}>
        <div
          className={`${c.filterField} ${
            filterState !== 0 && viewFilters === "ratinFilter" && c.active
          } ${
            filterState === -1 && viewFilters === "ratinFilter" && c.decActive
          }  ${
            filterState === 1 && viewFilters === "ratinFilter" && c.incActive
          }`}
          onClick={() => {
            filterHotel("ratinFilter");
          }}
        >
          <p>Рейтинг</p>
          <div className={c.filterSelector}>
            <HiChevronUp viewBox="0 -5 23 14" />
            <HiChevronDown viewBox="0 6 23 18" />
          </div>
        </div>
        <div
          className={`${c.filterField} ${
            filterState !== 0 && viewFilters === "priceFilter" && c.active
          } ${
            filterState === -1 && viewFilters === "priceFilter" && c.decActive
          }  ${
            filterState === 1 && viewFilters === "priceFilter" && c.incActive
          }`}
          onClick={() => {
            filterHotel("priceFilter");
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
