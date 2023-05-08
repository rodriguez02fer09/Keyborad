import React from "react";
import "./section.scss";
import LineSection from "../../assets/line-section.svg";

const Section = ({ isDark, text }) => {
  const defaultClass = `main-section`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__container ${custonClass}__container`}>
        <p>{text}</p>
      </div>
      <div className={`${defaultClass}__line ${custonClass}__line`}>
        <img src={LineSection} alt="" />
      </div>
    </div>
  );
};
export default Section;
