import React from "react";
import c from "./Header.module.scss";
import { RxExit } from "react-icons/rx";
const Header = () => {
  return (
    <div className={c.header}>
      <h1>Simple Hotel Check</h1>
      <div className={c.exit}>
        <p>Выход</p>
        <RxExit />
      </div>
    </div>
  );
};

export default Header;
