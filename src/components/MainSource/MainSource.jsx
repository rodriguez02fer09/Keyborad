import React from "react";
import "./mainSource.scss";

const MainSource = ({isDark}) => {
  const defaultClass = `main-source`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__source ${custonClass}__source`}>
        <p>Source</p>
      </div>
      <div className={`${defaultClass}__link ${custonClass}__link`}>
        <a href="">https://en.wiktionary.org/wiki/keyboard</a>
      </div>
    </div>
  );
};
export default MainSource;
