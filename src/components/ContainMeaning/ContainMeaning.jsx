import React from "react";
import "./containMeaning.scss"
import TitleMeaning from "../TitleMeaning/TitleMeaning";
import DescriptionMeaning from "../DescriptionMeaning/DescriptionMeaning"

const ContainMeaning = ({isDark})=>{
    const defaultClass = `main-containMeaning`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
    return(
        <div className={`${defaultClass} ${custonClass}`}>
<TitleMeaning/>
<DescriptionMeaning/>
        </div>
    )
}
export default ContainMeaning;