import React from "react";
import "./containKeyboard.scss"
import ContainMode from "../ContainMode/ContainMode"
import  SearchPrompt  from "../SearchPrompt/SearchPrompt"
import ContainTitleButton from "../ContainTitleButton/ContainTitleButton"

const ContainKeyboard = () => {
  return(
    <div className="containKeyboard">
      <ContainMode/>
      <SearchPrompt/>
      <ContainTitleButton/>
    </div>
  )
}
export default ContainKeyboard;