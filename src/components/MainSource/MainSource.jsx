import React,{useContext} from "react";
import "./mainSource.scss";
import { AppContext } from "../../context/index";

const MainSource = () => {
  const { theme , fontStyle } = useContext(AppContext)
 
  return (
    <div className={`main-source main-source--${theme}`}>
      <div className="source">
        <p style={{ fontFamily: fontStyle }}>Source</p>
      </div>
      <div className="link">
        <a style={{ fontFamily: fontStyle }} href="">https://en.wiktionary.org/wiki/keyboard</a>
      </div>
    </div>
  );
};
export default MainSource;
