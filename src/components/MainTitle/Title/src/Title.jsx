import React, { useContext } from "react";
import "../index.scss";
import { AppContext } from "../../../../context/index";

const Title = ({ title, phonetic }) => {
  const { fontStyle, theme } = useContext(AppContext);
  const defaultClass = "title";
 
  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div className={`${defaultClass}__container ${defaultClass}__container--${theme}`}>
        <h1 style={{ fontFamily: fontStyle }}>{title}</h1>
      </div>
      <div className={`${defaultClass}__idioma ${defaultClass}__idioma--${theme}`}>
        <p style={{ fontFamily: fontStyle }}>{phonetic?.text}</p>
      </div>
    </div>
  );
};

export default Title;
