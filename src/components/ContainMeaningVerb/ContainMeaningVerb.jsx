import React from "react";
import "./containMeaningVerb.scss"
import Section from "../Section/Section";
import ContainMeaning from "../ContainMeaning/ContainMeaning"



const ContainMeaningVerb = ({isDark,text }) => {
    const defaultClass = `main-containMeaningVerb`;
    const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
return(
    <div className={`${defaultClass} ${custonClass}`}>
<Section text={text}/>
<ContainMeaning/>
    </div>
)

}

export default ContainMeaningVerb;