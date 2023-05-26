import React, { useContext } from "react";
import "../style/searchPrompt.scss";
import Shape from "../../../assets/shape.svg";
import { AppContext} from "../../../context/index";

const SearchPrompt = () => {
  const { theme, fontStyle } = useContext(AppContext);


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
          style={{ fontFamily: fontStyle }}
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
