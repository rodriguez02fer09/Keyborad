import React,{useContext} from "react";
import Section from "../Section";
import TitleMeaning from "../TitleMeaning";
import DescriptionMeaning from "../DescriptionMeaning";
import {AppContext} from "../../../context/index"
import Synonyms from "../Synonyms";
import DescripMeaningVerb from "../DescripMeaningVerb"
import '../index.scss';

const MainInformation = ({ isDark }) => {
  const defaultClass = `main-containMeaning`;
  const { fontStyle } = useContext(AppContext)

  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div
      className={`${defaultClass} ${custonClass}`}
      style={{ fontFamily: fontStyle }}
    >
      <Section text="noun"/>
      <TitleMeaning />
      <DescriptionMeaning />
      <Synonyms/>
      <Section text="verb"/>
      <DescripMeaningVerb/>
    </div>
  );
};
export default MainInformation;
