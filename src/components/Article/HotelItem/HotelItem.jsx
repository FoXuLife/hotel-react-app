import React from "react";
import c from "./HotelItem.module.scss";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

const HotelItem = ({active}) => {
  return (
    <div className={c.hotelItem}>
      <div className={c.nameHotel}>
        <p>Moscow Marriott Grand Hotel</p>
        <AiFillHeart className={active?c.active:''}/>
      </div>
      <div className={c.dataTime}>
        <p>28 June, 2020</p>-<p>1 день</p>
      </div>
      <div className={c.ratingPrice}>
        <div className={c.rating}>
          <AiFillStar className={c.activeStar} />
          <AiFillStar className={c.activeStar} />
          <AiFillStar className={c.activeStar} />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <p>
          Price:<span>23 924 ₽</span>
        </p>
      </div>
    </div>
  );
};

export default HotelItem;
