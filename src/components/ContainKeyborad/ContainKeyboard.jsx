import React,{useContext} from "react";
import "./containKeyboard.scss"
import { AppContext } from "../../context/index"
import SearchPrompt  from "../SearchPrompt"
import MainTitle from '../MainTitle';
import Menu from "../Menu";
import LineLong from "../../assets/line-long.svg"
import MainInformation from '../MainInformation';
import MainSource from "../MainSource"


const ContainKeyboard = () => {
  const { theme } = useContext(AppContext)

  return(
    <div className={`containKeyboard containKeyboard--${theme}`}>
      <Menu/>
      <SearchPrompt/>
      <MainTitle/>
      <MainInformation/>
    <div className="containKeyboard-img">
      <img src={LineLong} alt="" />
    </div>
    <MainSource/>
    </div>
  )
}
export default ContainKeyboard;