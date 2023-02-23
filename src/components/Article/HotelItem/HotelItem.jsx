import React from "react";
import c from "./HotelItem.module.scss";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { followHotel } from "redux/reducers/hotelReducer";

const HotelItem = ({
  name,
  id,
  stars,
  priceFrom,
  date,
  countDays,
  active = false,
}) => {
  const dispatch = useDispatch();
  const star = [];
  for (let i = 0; i < 5; i++) {
    stars > i
      ? star.push(<AiFillStar className={c.activeStar} key={i} />)
      : star.push(<AiFillStar key={i} />);
  }
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
          className={active ? c.active : ""}
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
        <div className={c.rating}>{star.map((e) => e)}</div>
        <p>
          Price:<span>{priceFrom} ₽</span>
        </p>
      </div>
    </div>
  );
};

export default HotelItem;
