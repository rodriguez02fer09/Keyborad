import React, { useContext, useReducer } from "react";
import "./containKeyboard.scss";
import { AppContext } from "../../context/index";
import SearchPrompt from "../SearchPrompt";
import MainTitle from "../MainTitle";
import Menu from "../Menu";
import LineLong from "../../assets/line-long.svg";
import MainInformation from "../MainInformation";
import MainSource from "../MainSource";

const reducer = (state, action) => {
  if (action.type === "update_word") {
    return {
      ...state,
      word: action.newWord,
    };
  }
};

const ContainKeyboard = () => {
  const { theme } = useContext(AppContext);
  const [state, dispactch] = useReducer(reducer, { word: "" });

 

  const handleInputChange = (e) => {
    dispactch({
      type: "update_word",
      newWord: e.target.value,
    });
    console.log(state.word)
  };



  return (
    <div className={`containKeyboard containKeyboard--${theme}`}>
      <Menu />
      <SearchPrompt handleInputChange={handleInputChange} />
      <MainTitle />
      <MainInformation />
      <div className="containKeyboard-img">
        <img src={LineLong} alt="" />
      </div>
      <MainSource />
    </div>
  );
};
export default ContainKeyboard;
