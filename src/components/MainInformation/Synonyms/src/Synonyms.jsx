import React, { useContext } from "react";
import "../index.scss";
import { AppContext } from "../../../../context/index";

const Synonyms = ({ isDark, values }) => {
  const { fontStyle } = useContext(AppContext);
  const defaultClass = `main-synonyms`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div className={`${defaultClass}__title ${custonClass}__title`}>
        <p style={{ fontFamily: fontStyle }}>Synonyms</p>
      </div>
      <div
        className={`${defaultClass}__description ${custonClass}__description`}
      >
        {values.map((value) => {
          return <p style={{ fontFamily: fontStyle }}> {value}</p>;
        })}
      </div>
    </div>
  );
};
export default Synonyms;
