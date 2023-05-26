import React from "react";
import "../index.scss";
import DarkMode from "../DarkMode";
import LineVertical from "../../../assets/line-vertical.svg";
import ModeFonts from "../ModeFonts";
import IconBook from "../../../assets/iconBook.svg";

const Menu = () => {
  return (
    <div className="containMode">
      <div className="IconBook">
        <img src={IconBook} alt="" />
      </div>
      <ModeFonts />
      <DarkMode />
      <div className="containMode-line">
        <img src={LineVertical} alt="" />
      </div>
    </div>
  );
};

export default Menu;
