import React ,{useContext}from "react";
import "./title.scss";
import {AppContext } from "../../context/index";


const Title = () => {
  const { fontStyle, theme } = useContext(AppContext)

 
  return (
    <div className={`title title--${theme}`}
    
 
    >
      <div className="container"    >
        <h1 style={{ fontFamily: fontStyle }}>Keyboard</h1>
      </div>
      <div className="idioma"   >
        <p  style={{ fontFamily: fontStyle }}>/ˈkiːbɔːd/</p>
      </div>
    </div>
  );
};

export default Title;
