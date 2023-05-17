import React from "react";
import "./containMode.scss";
import DarkMode from "../DarMode/DarkMode";
import LineVertical from "../../assets/line-vertical.svg";
import ModeFonts from "../ModeFonts/ModeFonts";
import IconBook from "../../assets/iconBook.svg";


const ContainMode = () => {
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

export default ContainMode;
