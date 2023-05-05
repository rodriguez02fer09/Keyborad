import React from "react";
import "./searchPrompt.scss";
import Shape from "../../assets/shape.svg";

const SearchPrompt = ({ isDark }) => {
  const defaultClass = `search-prompt`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__container ${custonClass}__container`}>
        <input
          className={`${defaultClass}__container-input ${custonClass}__container-input `}
          type="text" placeholder = "Keyboard"
        />
        <img
          className={`${defaultClass}__container-img ${custonClass}__container-img`}
          src={Shape}
          alt="shape"
        />
      </div>
    </div>
  );
};
export default SearchPrompt;
