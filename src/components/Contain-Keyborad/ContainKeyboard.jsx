import React from "react";
import "./containKeyboard.scss"
import ContainMode from "../ContainMode/ContainMode"
import  SearchPrompt  from "../SearchPrompt/SearchPrompt"
import ContainTitleButton from "../ContainTitleButton/ContainTitleButton"
import Section from "../Section/Section";
import ContainMeaning from "../ContainMeaning/ContainMeaning"

const ContainKeyboard = () => {
  return(
    <div className="containKeyboard">
      <ContainMode/>
      <SearchPrompt/>
      <ContainTitleButton/>
      <Section/>
      <ContainMeaning/>
    </div>
  )
}
export default ContainKeyboard;