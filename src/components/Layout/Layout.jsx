import React, { useContext } from "react";
import "./layout.scss";
import ContainKeyboard from "../ContainKeyborad/ContainKeyboard";
import {ThemeContext} from "../../context/index";


const Layout = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`layout layout--${theme}`}>
      <ContainKeyboard />
    </div>
  );
};
export default Layout;
