import React ,{useContext}from "react";
import "./title.scss";
import { ThemeContext, FontContext } from "../../context/index";


const Title = () => {
  const { fontStyle } = useContext(FontContext)

  const { theme } = useContext(ThemeContext)
  return (
    <div className={`title title--${theme}`}
    style={{ fontFamily: fontStyle }}
 
    >
      <div className="container"    style={{ fontFamily: fontStyle }}>
        <h1>Keyboard</h1>
      </div>
      <div className="idioma"  style={{ fontFamily: fontStyle }}  >
        <p>/ˈkiːbɔːd/</p>
      </div>
    </div>
  );
};

export default Title;
