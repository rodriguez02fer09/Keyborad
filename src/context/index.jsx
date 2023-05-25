import React, { createContext, useState } from "react";

//contexto del modo dark - theme
// export const ThemeContext = createContext();


// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const isDark = () => {
//     return theme === "dark";
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// //contexto del style font
// export const FontContext = createContext();

// export const FontProvider = ({ children }) => {
//   const [fontStyle, setFontStyle] = useState("Sans Serif");

//   const handleFontStyleChange = (font) => {
//     setFontStyle(() => font);
//   };

//   return (
//     <FontContext.Provider
//       value={{ fontStyle, handleFontStyleChange  }}
//     >
//       {children}
//     </FontContext.Provider>
//   );
// };


// const context = { theme:"light" , fontStyle:"Sans Serif" }

export const AppContext = createContext()

export const ContextProvider = ({ children }) => {
  const [context, setContext] =  useState({ theme:"light" , fontStyle:"Sans Serif" })

  const handleFontStyleChange = (font) => {
    setContext((state) => {
      return {
        ...state,
        fontStyle: font
      }
    });
  };

  const toggleTheme = () => {
    setContext((state) => {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      }
    });
  };

  const isDark = () => {
    return context.theme === "dark";
  };

  return (
    <AppContext.Provider
      value={{ isDark, toggleTheme, handleFontStyleChange, fontStyle: context.fontStyle , theme:context.theme }}
    >
      {children}
    </AppContext.Provider>
  );

}




