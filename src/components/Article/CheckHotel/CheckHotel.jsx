import React from "react";
import c from "./CheckHotel.module.scss";
import { BsChevronRight } from "react-icons/bs";
import { useHorizontalScroll } from "./UseHorisontalScroll";
import HotelItem from "../HotelItem/HotelItem";
import { IoIosHome } from "react-icons/io";
import { useSelector } from "react-redux";

const CheckHotel = () => {
  const scrollRef = useHorizontalScroll();
  const hotelReducer = useSelector((store) => store?.hotelReducer);
  const datesOfStay = useSelector((store) => store?.filterReducer);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date(datesOfStay.date)
    .toLocaleDateString("ru-RU", options)
    .slice(0, 15);
  return (
    <div className={c.checkHotel}>
      <div className={c.header}>
        <div className={c.breadCrumbs}>
          <h1>Отели</h1>
          <BsChevronRight />
          <h1>{datesOfStay.location}</h1>
        </div>
        <p>{today}</p>
      </div>
      <div className={c.slider} id="container" ref={scrollRef}>
        {hotelReducer.images.map((e) => {
          return <img src={e.src} key={e.id} alt={e.id} />;
        })}
      </div>
      <div className={c.mainContainer}>
        <p>
          Добавлено в Избранное:<span>3</span> отеля
        </p>
        <div className={c.hotelItems}>
          {hotelReducer.hotels.map((e) => {
            return (
              <div className={c.item} key={e.hotelId}>
                <IoIosHome />
                <HotelItem
                  name={e.name}
                  id={e.hotelId}
                  stars={e.stars}
                  priceFrom={e.priceFrom}
                  countDays={datesOfStay.countDays}
                  date={today}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CheckHotel;
