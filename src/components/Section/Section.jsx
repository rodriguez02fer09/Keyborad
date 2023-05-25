import React ,{useContext}from "react";
import "./section.scss";
import LineSection from "../../assets/line-section.svg";
import { ThemeContext,FontContext } from "../../context/index";

const Section = ({text}) => {
  const defaultClass = "main-section";
  const { theme } = useContext(ThemeContext)
  const { fontStyle } = useContext(FontContext)

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div className={`${defaultClass}__container-p ${defaultClass}__container-p--${theme}`}  >
        <p  style={{ fontFamily: fontStyle }} className={`${defaultClass}__container-p__p ${defaultClass}__container-p__p--${theme}`}>{text}</p>
      </div>
      <div className={`${defaultClass}__line ${defaultClass}__line--${theme}`}>
        <img  src={LineSection} alt="" />
      </div>
    </div>
  );
};
export default Section;
