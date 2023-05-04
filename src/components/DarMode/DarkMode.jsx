import React from "react";
import "./darkMode.scss";
import DarkModeNomal from "../../assets/dar-mode-normal.svg";

const DarkMode = () => {
  return (
    <div className="main-darkMode">
      <img src={DarkModeNomal} alt="" />
    </div>
  );
};

export default DarkMode;
