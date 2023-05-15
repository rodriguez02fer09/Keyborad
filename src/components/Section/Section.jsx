import React ,{useContext}from "react";
import "./section.scss";
import LineSection from "../../assets/line-section.svg";
import { ThemeContext } from "../../context/index";

const Section = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`main-section main-section--${theme}`}>
      <div className="container">
        <p>noun</p>
      </div>
      <div className="line">
        <img src={LineSection} alt="" />
      </div>
    </div>
  );
};
export default Section;
