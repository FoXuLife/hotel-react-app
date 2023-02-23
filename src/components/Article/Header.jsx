import React from "react";
import c from "./Header.module.scss";
import { RxExit } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logoutRequest } from "../../redux/reducers/authReducer";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={c.header}>
      <h1>Simple Hotel Check</h1>
      <div
        className={c.exit}
        onClick={() => {
          dispatch(logoutRequest());
        }}
      >
        <p>Выход</p>
        <RxExit />
      </div>
    </div>
  );
};

export default Header;
