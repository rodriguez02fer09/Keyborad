import React from "react";
import "./containMeaning.scss"
import TitleMeaning from "../TitleMeaning/TitleMeaning";
import DescriptionMeaning from "../DescriptionMeaning/DescriptionMeaning"

const ContainMeaning = ()=>{
    return(
        <div className="containMeaning">
<TitleMeaning/>
<DescriptionMeaning/>
        </div>
    )
}
export default ContainMeaning;