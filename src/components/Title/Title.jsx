import React from "react";
import "./title.scss";

const Title = ({isDark}) => {
    const defaultClass = `main-title`
  const custonClass = `${isDark ? `${defaultClass}--dark`: `${defaultClass}`}`
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__container ${custonClass}__container`}>
        <h1>Title</h1>
      </div>
      <div className={`${defaultClass}__idioma ${custonClass}__idioma `}>
        <p>idioma</p>
      </div>
    </div>
  );
};

export default Title;
