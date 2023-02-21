import React from "react";
import c from "./Article.module.scss";
import CheckHotel from "./CheckHotel/CheckHotel";
import FilterFind from "./FilterFind/FilterFind";
import Favourites from "./Favourites/Favourites";
import Header from "./Header";
const Article = () => {
  return (
    <div className={c.article}>
      <Header />
      <article>
        <FilterFind />
        <Favourites />
        <CheckHotel />
      </article>
    </div>
  );
};

export default Article;
