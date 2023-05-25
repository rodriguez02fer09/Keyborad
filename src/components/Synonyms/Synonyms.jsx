import React,{useContext} from "react";
import "./synonyms.scss";
import {FontContext} from "../../context/index"


const Synonyms = ({isDark}) => {
  const { fontStyle } = useContext(FontContext)
  const defaultClass = `main-synonyms`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <div  className={`${defaultClass}__title ${custonClass}__title`}>
        <p  style={{ fontFamily: fontStyle }}>Synonyms</p>
      </div>
      <div  className={`${defaultClass}__description ${custonClass}__description`}>
        <p style={{ fontFamily: fontStyle }}> electronic keboard</p>
      </div>
    </div>
  );
};
export default Synonyms;
