import React,{useContext} from "react";
import "./mainSource.scss";
import { ThemeContext } from "../../context/index";

const MainSource = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`main-source main-source--${theme}`}>
      <div className="source">
        <p>Source</p>
      </div>
      <div className="link">
        <a href="">https://en.wiktionary.org/wiki/keyboard</a>
      </div>
    </div>
  );
};
export default MainSource;
