import React from "react";
import Ghost from "assets/img/Circles.gif";
import classes from "./Preloader.module.scss";

export default function Preloader() {
  return <img className={classes.ghost} src={Ghost} alt="" />;
}
