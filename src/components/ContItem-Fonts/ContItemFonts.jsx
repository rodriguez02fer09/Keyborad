import React, { useContext } from "react";
import "./contItemFonts.scss";
import { ThemeContext, FontContext } from "../../context/index";

const ContItemFonts = ({ fonts, handlerClick }) => {
  const { theme } = useContext(ThemeContext);
  const {getFontStyle} = useContext(FontContext)
  const defaultClass = "contItemFonts";

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__container-listFont ${defaultClass}__container-listFont--${theme} `}
      >
        {fonts.map(({ font }, index) => {
          return (
            <div key={index}>
              <p
                className={`${defaultClass}__container-listFont__p ${defaultClass}__container-listFont__p--${theme} 
                ${font === getFontStyle() ? "selected" : ""}`}
                key={index}
                onClick={() => {
                  handlerClick(font);
                }}
                style={{ fontFamily: getFontStyle() }}
              >
                {font}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContItemFonts;
