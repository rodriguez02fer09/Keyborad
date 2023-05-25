import React,{useContext} from "react";
import "./titleMeaning.scss"
import {FontContext} from "../../context/index"

const TitleMeaning = ()=>{
    const { fontStyle } = useContext(FontContext)

    return(
        <div className="titleMeaning" style={{ fontFamily: fontStyle }}>
            <p>Meaning</p>
        </div>
    )
}
export default TitleMeaning;