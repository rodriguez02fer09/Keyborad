import React, { useContext } from "react";
import "./searchPrompt.scss";
import Shape from "../../assets/shape.svg";
import { ThemeContext } from "../../context/index";

const SearchPrompt = () => {
  const { theme } = useContext(ThemeContext);
  const defaultClass = "search-prompt";
  return (
    <div className={`${defaultClass} ${defaultClass}--${theme}`}>
      <div
        className={`${defaultClass}__container-input ${defaultClass}__container-input--${theme}`}
      >
        <input
          className={`${defaultClass}__container-input__input ${defaultClass}__container-input__input--${theme}`}
          type="text"
          placeholder="Keyboard"
        />
      </div>
      <div
        className={`${defaultClass}__container-img ${defaultClass}__container-img--${theme}`}
      >
        <img className={`${defaultClass}__container-img__img ${defaultClass}__container-img__img--${theme}`} src={Shape} alt="shape" />
      </div>
    </div>
  );
};
export default SearchPrompt;
