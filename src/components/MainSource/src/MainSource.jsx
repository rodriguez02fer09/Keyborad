import React,{useContext} from "react";
import "../index.scss";
import { AppContext } from "../../../context/index";

const MainSource = ({source}) => {
  const { theme , fontStyle } = useContext(AppContext)
 
  return (
    <div className={`main-source main-source--${theme}`}>
      <div className="source">
        <p style={{ fontFamily: fontStyle }}>Source</p>
      </div>
      <div className="link">
        <a style={{ fontFamily: fontStyle }} href="">{source}</a>
      </div>
    </div>
  );
};
export default MainSource;
