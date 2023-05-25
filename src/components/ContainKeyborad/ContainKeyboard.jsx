import React,{useContext} from "react";
import "./containKeyboard.scss"
import ContainMode from "../ContainMode/ContainMode"
import SearchPrompt  from "../SearchPrompt/SearchPrompt"
import ContainTitleButton from "../ContainTitleButton/ContainTitleButton"
import Section from "../Section/Section";
import ContainMeaning from "../ContainMeaning/ContainMeaning"
import Synonyms from "../Synonyms/Synonyms"
import ContainMeaningVerb from "../ContainMeaningVerb/ContainMeaningVerb"
import LineLong from "../../assets/line-long.svg"
import MainSource from "../MainSource/MainSource"
import {ThemeContext} from "../../context/index"

const ContainKeyboard = () => {
  const { theme } = useContext(ThemeContext)
  



  
  return(
    <div className={`containKeyboard containKeyboard--${theme}`}>
      <ContainMode/>
      <SearchPrompt/>
      <ContainTitleButton/>
      <Section text="noun"/>
      <ContainMeaning/>
      <Synonyms/>
      <ContainMeaningVerb text="verb"/>
    <div className="containKeyboard-img">
      <img src={LineLong} alt="" />
    </div>
    <MainSource/>
    </div>
  )
}
export default ContainKeyboard;