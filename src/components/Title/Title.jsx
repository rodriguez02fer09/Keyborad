import React ,{useContext}from "react";
import "./title.scss";
import { ThemeContext } from "../../context/index";


const Title = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`title title--${theme}`}>
      <div className="container">
        <h1>Keyboard</h1>
      </div>
      <div className="idioma">
        <p>/ˈkiːbɔːd/</p>
      </div>
    </div>
  );
};

export default Title;
