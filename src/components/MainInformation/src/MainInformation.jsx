import React, { useContext } from "react";
import Section from "../Section";
import TitleMeaning from "../TitleMeaning";
import DescriptionMeaning from "../DescriptionMeaning";
import { AppContext } from "../../../context/index";
import Synonyms from "../Synonyms";
import DescripMeaningVerb from "../DescripMeaningVerb";
import "../index.scss";

const MainInformation = ({ isDark,index, meanings=[] }) => {
  const defaultClass = `main-containMeaning`;
  const { fontStyle } = useContext(AppContext);

  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div key ={index}
      className={`${defaultClass} ${custonClass}`}
      style={{ fontFamily: fontStyle }}
    >
       {meanings.map(({partOfSpeech,definitions, synonyms}) => {
        return (
      <>
            <Section text={partOfSpeech}/>
            <TitleMeaning />
            <DescriptionMeaning definitions={definitions}  />
            <Synonyms values={synonyms} />
           
          </>
        );
      })}
    </div>
  );
};
export default MainInformation;
