import React from "react";
import c from "./HotelItem.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { followHotel } from "redux/reducers/hotelReducer";
import { getStarts } from "helpers/getStars";

const HotelItem = ({
  name,
  id,
  stars,
  priceFrom,
  date,
  countDays,
  isFavorite,
}) => {
  const dispatch = useDispatch();

  function createLabel(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return `${
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ]
    }`;
  }
  return (
    <div className={c.hotelItem}>
      <div className={c.nameHotel}>
        <p>{name ? name : "Name"}</p>
        <AiFillHeart
          className={isFavorite ? c.active : ""}
          onClick={() => {
            dispatch(followHotel(id, name, stars, priceFrom, date, countDays));
          }}
        />
      </div>
      <div className={c.dataTime}>
        <p>{date}</p>-
        <p>
          {countDays} {createLabel(countDays, ["День", "Дня", "Дней"])}
        </p>
      </div>
      <div className={c.ratingPrice}>
        <div className={c.rating}>{getStarts(stars)}</div>
        <p>
          Price:<span>{priceFrom} ₽</span>
        </p>
      </div>
    </div>
  );
};

export default HotelItem;
