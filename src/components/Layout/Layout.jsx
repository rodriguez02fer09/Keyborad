import React, { useContext } from "react";
import "./layout.scss";
import ContainKeyboard from "../ContainKeyborad/ContainKeyboard";
import {ThemeContext, FontContext} from "../../context/index";


const Layout = () => {
  const { theme } = useContext(ThemeContext)
  const { fontStyle } = useContext(FontContext)
  return (
    <div className={`layout layout--${theme}`}>
      <ContainKeyboard />
    </div>
  );
};
export default Layout;
