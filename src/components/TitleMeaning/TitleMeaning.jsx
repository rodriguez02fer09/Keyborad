import React,{useContext} from "react";
import "./titleMeaning.scss"
import {AppContext} from "../../context/index"

const TitleMeaning = ()=>{
    const { fontStyle } = useContext(AppContext)

    return(
        <div className="titleMeaning" >
            <p style={{ fontFamily: fontStyle }}>Meaning</p>
        </div>
    )
}
export default TitleMeaning;