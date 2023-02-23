import React from "react";
import c from "./Article.module.scss";
import CheckHotel from "./CheckHotel/CheckHotel";
import FilterFind from "./FilterFind/FilterFind";
import Favourites from "./Favourites/Favourites";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
const Article = () => {
  const isAuth = useSelector((store) => store?.authReducer?.isAuth);
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />
      <div className={c.article}>
        <FilterFind />
        <Favourites />
        <CheckHotel />
      </div>
    </>
  );
};

export default Article;
