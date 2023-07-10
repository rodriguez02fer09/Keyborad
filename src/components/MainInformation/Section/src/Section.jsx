import React ,{useContext}from "react";
import "../index.scss";
import LineMobile  from "../../../../assets/line-mobile.svg";
import LineTablet from "../../../../assets/line-tablet.svg";
import LineDesktop from "../../../../assets/desktop-line.svg";

import { AppContext } from "../../../../context/index";

const Section = ({text}) => {
  const defaultClass = "main-section";
  const { theme ,  fontStyle } = useContext(AppContext)


  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div className={`${defaultClass}__container-p ${defaultClass}__container-p--${theme}`}  >
        <p  style={{ fontFamily: fontStyle }} className={`${defaultClass}__container-p__p ${defaultClass}__container-p__p--${theme}`}>{text}</p>
      </div>
      <div className={`${defaultClass}__line ${defaultClass}__line--${theme}`}>
        <img className={`${defaultClass}__line__image--mobile ${defaultClass}__line__image--mobile--${theme}`}  src={LineMobile } alt="Imagen para mobile" />
         <img className={`${defaultClass}__line__image--tablet ${defaultClass}__line__image--tablet`}  src={LineTablet } alt="Imagen para tablet" />
        <img  className={`${defaultClass}__line__image--desktop ${defaultClass}__line__image--desktop`} src={LineDesktop} alt="Imagen para desktop" />
      </div>
    </div>
  );
};
export default Section;
