import React from "react";
import "./button.scss";
import ImgButton from "../../assets/play-button-normal.svg";

const Button = () => {
  return (
    <div className="Button">
      <img src={ImgButton} alt="" />
    </div>
  );
};
export default Button;
