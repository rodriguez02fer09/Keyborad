import React, { useState, useContext } from "react";
import "./modeFonts.scss";
import ContItemFonts from "../ContItem-Fonts/ContItemFonts";
import ItemFont from "../ItemFont/ItemFont";



const fonts = [{ font: "Sans Serif" }, { font: "Serif" }, { font: "Mono" }];

const ModeFonts = () => {
  const [open, setOpen] = useState(false);
  const [currentFont, setCurrentFont] = useState('SansSerif');
  

  const toggleDropDown = () => {
    setOpen((state) => !state);
  };

  const selectFont = (f) => {
    setOpen(!open);
    setCurrentFont(f);
  };
  return (

      <div className="main-modeFonts">
        <ItemFont handlerOnClick={toggleDropDown} value={currentFont} />
        {open && <ContItemFonts fonts={fonts} handlerClick={selectFont}  />}
      </div>
 
  );
};

export default ModeFonts;