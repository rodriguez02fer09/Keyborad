import React, { useState, useContext } from "react";
import "./modeFonts.scss";
import ContItemFonts from "../ContItem-Fonts/ContItemFonts";
import ItemFont from "../ItemFont/ItemFont";
import { FontContext } from "../../context/index";


const fonts = [{ font: "Sans Serif" }, { font: "Serif" }, { font: "Mono" }];

const ModeFonts = () => {
  const [open, setOpen] = useState(false);
  const {fontStyle, handleFontStyleChange} = useContext(FontContext);
  const [currentFont, setCurrentFont] = useState(fontStyle);
  

  const toggleDropDown = () => {
    setOpen((state) => !state);
  };

  const selectFont = (f) => {
    debugger;
    setOpen(!open);
    setCurrentFont(() => f);
    handleFontStyleChange(f);
  };
  debugger;
  return (
      <div className="main-modeFonts">
        <ItemFont handlerOnClick={toggleDropDown} value={currentFont} />
        {open && <ContItemFonts fonts={fonts} handlerClick={selectFont}  />}
      </div>
 
  );
};

export default ModeFonts;