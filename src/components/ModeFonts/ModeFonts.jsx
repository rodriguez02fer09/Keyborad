import React, { useState, useContext } from "react";
import "./modeFonts.scss";
import ContItemFonts from "../ContItem-Fonts/ContItemFonts";
import ItemFont from "../ItemFont/ItemFont";
import { FontContext } from "../../context/index";


const fonts = [{ label: "Sans Serif", font:"Open Sans " }, { label: "Serif", font:"PT Serif"}, {label: "Mono" ,font: "Roboto Mono" }];

const ModeFonts = () => {
  const [open, setOpen] = useState(false);
  const {fontStyle, handleFontStyleChange} = useContext(FontContext);
  const [currentFont, setCurrentFont] = useState(fontStyle);
  

  const toggleDropDown = () => {
    setOpen((state) => !state);
  };

  const selectFont = (f) => {
    setOpen(!open);
    setCurrentFont(() => f.label);
    handleFontStyleChange(f.font);
  };

  return (
      <div className="main-modeFonts">
        <ItemFont handlerOnClick={toggleDropDown} value={currentFont} />
        {open && <ContItemFonts fonts={fonts} handlerClick={selectFont}  />}
      </div>
 
  );
};

export default ModeFonts;