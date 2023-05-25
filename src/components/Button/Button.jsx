import React, { useContext } from "react";
import { ThemeContext } from "../../context/index";
import "./button.scss";
import BottonNormal from "../../assets/play-button-normal.svg";
import BottonHover from "../../assets/play-button-hover.svg";

const Button = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="Button">
      <img src={ isDark() ?BottonHover : BottonNormal}/>
    </div>
  );
};
export default Button;
