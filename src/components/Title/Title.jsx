import React from "react";
import "./title.scss";

const Title = ({ isDark }) => {
  const defaultClass = `main-title`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__container ${custonClass}__container`}>
        <h1>Keyboard</h1>
      </div>
      <div className={`${defaultClass}__idioma ${custonClass}__idioma `}>
        <p>/ˈkiːbɔːd/</p>
      </div>
    </div>
  );
};

export default Title;
