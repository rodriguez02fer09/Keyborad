import React ,{useContext}from "react";
import "./title.scss";
import { ThemeContext, FontContext } from "../../context/index";


const Title = () => {
  const { fontStyle } = useContext(FontContext)

  const { theme } = useContext(ThemeContext)
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
