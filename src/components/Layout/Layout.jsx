import React, { useContext } from "react";
import "./layout.scss";
import ContainKeyboard from "../ContainKeyborad/ContainKeyboard";
import { AppContext } from "../../context/index";


const Layout = () => {
  const { theme  } = useContext(AppContext)
  
  return (
    <div className={`layout layout--${theme}`}>
      <ContainKeyboard />
    </div>
  );
};
export default Layout;
