import React,{useState} from "react";
import "./modeFonts.scss";
import ContItemFonts from "../ContItem-Fonts/ContItemFonts"
import ItemFont from "../ItemFont/ItemFont";


const fonts = [{ font: "Sans Serif" }, { font: "Serif" }, { font: "Mono" }];

const ModeFonts = () => {

  const [open , setOpen] = useState (false);

  const toggleDropDown = () => {
    setOpen((state) => !state)
  }

  return (
   <div className="main-modeFonts">
    <ItemFont handlerOnClick={toggleDropDown}/>
    {open && <ContItemFonts fonts={fonts} />}
   </div>
  );
};

export default ModeFonts;
