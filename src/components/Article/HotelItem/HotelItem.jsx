import React from "react";
import c from "./HotelItem.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { followHotel } from "redux/reducers/hotelReducer";
import { getStarts } from "helpers/getStars";
import { declination } from "helpers/declination";

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
  return (
    <div className={c.hotelItem}>
      <div className={c.nameHotel}>
        <p>{name ? name : "Name"}</p>
        {isFavorite ? (
          <AiFillHeart
            className={c.active}
            onClick={() => {
              dispatch(
                followHotel(id, name, stars, priceFrom, date, countDays)
              );
            }}
          />
        ) : (
          <AiOutlineHeart
            onClick={() => {
              dispatch(
                followHotel(id, name, stars, priceFrom, date, countDays)
              );
            }}
          />
        )}
      </div>
      <div className={c.dataTime}>
        <p>{date}</p>-
        <p>
          {countDays} {declination(countDays, ["День", "Дня", "Дней"])}
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
