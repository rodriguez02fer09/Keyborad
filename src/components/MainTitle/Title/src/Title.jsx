import React, { useContext } from "react";
import "../index.scss";
import { AppContext } from "../../../../context/index";

const Title = ({ title, phonetic }) => {
  const { fontStyle, theme } = useContext(AppContext);

  return (
    <div className={`title title--${theme}`}>
      <div className="container">
        <h1 style={{ fontFamily: fontStyle }}>{title}</h1>
      </div>
      <div className="idioma">
        <p style={{ fontFamily: fontStyle }}>{phonetic?.text}</p>
      </div>
    </div>
  );
};

export default Title;