import React ,{useContext}from "react";
import "./section.scss";
import LineSection from "../../assets/line-section.svg";
import { ThemeContext } from "../../context/index";

const Section = () => {
  const defaultClass = "main-section";
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div className={`${defaultClass}__container-p ${defaultClass}__container-p--${theme}`}>
        <p className={`${defaultClass}__container-p__p ${defaultClass}__container-p__p--${theme}`}>noun</p>
      </div>
      <div className={`${defaultClass}__line ${defaultClass}__line--${theme}`}>
        <img  src={LineSection} alt="" />
      </div>
    </div>
  );
};
export default Section;
