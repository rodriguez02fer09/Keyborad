import React, { useContext } from "react";
import "./contItemFonts.scss";
import { ThemeContext, FontContext } from "../../context/index";

const ContItemFonts = ({ fonts, handlerClick }) => {
  const { theme } = useContext(ThemeContext);
  const { fontStyle } = useContext(FontContext)
  const defaultClass = "contItemFonts";

  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__container-listFont ${defaultClass}__container-listFont--${theme} `}
      >
        {fonts.map((f, index) => {
          const { font, label } = f;
          return (
            <div key={index}>
              <p style={{ fontFamily: fontStyle }}
                className={`${defaultClass}__container-listFont__p ${defaultClass}__container-listFont__p--${theme}`}
                key={index}
                onClick={() => {
                  handlerClick(f);
                }}
              
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ContItemFonts;
