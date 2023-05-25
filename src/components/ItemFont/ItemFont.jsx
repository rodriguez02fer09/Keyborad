import React, { useContext } from "react";
import "./itemFont.scss";
import List from "../../assets/list-mode-fonts.svg";
import { ThemeContext } from "../../context/index";

const ItemFont = ({ value, handlerOnClick }) => {
  const { theme } = useContext(ThemeContext);

  const defaultClass = "main-itemFont";

  return (
    <div
      className={`${defaultClass} ${defaultClass}--${theme}`}
      onClick={handlerOnClick}
    >
      <div
        className={`${defaultClass}__container-input ${defaultClass}__container-input--${theme}`}
      >
        <input
          className={`${defaultClass}__container-input__input  ${defaultClass}__container-input__input--${theme} `}
          type="text"
          placeholder="Serif"
          value={value}
          onChange={(event) => handleFontStyleChange(event)}
          style={{ fontFamily: value }}
        //   {isEmpty && ( la casilla desocupada 
        //     <div className={`${defaultClass}__error ${custonClass}__error `}>
        //       No results
        //     </div>
        // )}
        />
      </div>
      <div
        className={`${defaultClass}__container-imagen ${defaultClass}__container-imagen--${theme}`}
      >
        <img
          className={`${defaultClass}__container-imagen__img  ${defaultClass}__container-imagen__img--${theme}`}
          src={List}
          alt=""
        />
      </div>
    </div>
  );
};
export default ItemFont;
