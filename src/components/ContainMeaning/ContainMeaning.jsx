import React,{useContext} from "react";
import "./containMeaning.scss";
import TitleMeaning from "../TitleMeaning/TitleMeaning";
import DescriptionMeaning from "../DescriptionMeaning/DescriptionMeaning";
import {FontContext} from "../../context/index"

const ContainMeaning = ({ isDark }) => {
  const defaultClass = `main-containMeaning`;
  const { fontStyle } = useContext(FontContext)

  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div
      className={`${defaultClass} ${custonClass}`}
      style={{ fontFamily: fontStyle }}
    >
      <TitleMeaning />
      <DescriptionMeaning />
    </div>
  );
};
export default ContainMeaning;
