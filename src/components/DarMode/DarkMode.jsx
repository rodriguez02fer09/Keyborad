import React, { useContext } from "react";
import { ThemeContext } from "../../context/index";
import "./darkMode.scss";
import DarkModeNormal from "../../assets/dar-mode-normal.svg";
import DarkModeDark from "../../assets/dark-mode-hover.svg";

const DarkMode = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  return (
    <div className="main-darkMode" onClick={toggleTheme}>
        <img src={ isDark() ? DarkModeDark :DarkModeNormal } />
    </div>
  );
};

export default DarkMode;
