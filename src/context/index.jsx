import React, { createContext, useState } from "react";

//contexto del modo dark - theme
export const ThemeContext = createContext();

//contexto del style font
export const FontContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isDark = () => {
    return theme === "dark";
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const FontProvider = ({ children }) => {
  const [fontStyle, setFontStyle] = useState("Sans Serif");

  const handleFontStyleChange = (event) => {
    debugger
    setFontStyle(() => event.target.value);
  };

   const getFontStyle = () => {
      return fontStyle
   }
  return (
    <FontContext.Provider
      value={{ getFontStyle, handleFontStyleChange  }}
    >
      {children}
    </FontContext.Provider>
  );
};
