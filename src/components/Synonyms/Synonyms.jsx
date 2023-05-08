import React from "react";
import "./synonyms.scss";


const Synonyms = ({isDark}) => {
  const defaultClass = `main-synonyms`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div  className={`${defaultClass}__title ${custonClass}__title`}>
        <p>Synonyms</p>
      </div>
      <div  className={`${defaultClass}__description ${custonClass}__description`}>
        <p> electronic keboard</p>
      </div>
    </div>
  );
};
export default Synonyms;
