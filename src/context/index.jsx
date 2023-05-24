import React, { createContext, useState } from "react";

//contexto del modo dark - theme
export const ThemeContext = createContext();



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

//contexto del style font
export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontStyle, setFontStyle] = useState("Sans Serif");

  const handleFontStyleChange = (font) => {
    setFontStyle(() => font);
  };

  return (
    <FontContext.Provider
      value={{ fontStyle, handleFontStyleChange  }}
    >
      {children}
    </FontContext.Provider>
  );
};
