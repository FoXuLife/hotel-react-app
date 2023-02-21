import React from "react";
import c from "./CheckHotel.module.scss";
import { BsChevronRight } from "react-icons/bs";
import { useHorizontalScroll } from "./UseHorisontalScroll";
import HotelItem from "../HotelItem/HotelItem";
import { IoIosHome } from "react-icons/io";

const CheckHotel = () => {
  const scrollRef = useHorizontalScroll();
  return (
    <div className={c.checkHotel}>
      <div className={c.header}>
        <div className={c.breadCrumbs}>
          <h1>Отели</h1>
          <BsChevronRight />
          <h1>Москва</h1>
        </div>
        <p>07 июля 2020</p>
      </div>
      <div className={c.slider} id="container" ref={scrollRef}>
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=75f8d4766c9d59aa8a6915de80e746a1f66d64b6-8356639-images-thumbs&n=13"
          alt=""
        />
      </div>
      <div className={c.mainContainer}>
        <p>
          Добавлено в Избранное:<span>3</span> отеля
        </p>
        <div className={c.hotelItems}>
          <div className={c.item}>
            <IoIosHome />
            <HotelItem />
          </div>
          <div className={c.item}>
            <IoIosHome />
            <HotelItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckHotel;
