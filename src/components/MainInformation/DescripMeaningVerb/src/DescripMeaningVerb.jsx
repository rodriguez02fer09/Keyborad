import React from "react";
import "../index.scss";
import DescriptionMeaning from "../../DescriptionMeaning";
import TitleMeaning from "../../TitleMeaning";

const ContainMeaningVerb = ({ isDark}) => {
  const defaultClass = `main-containMeaningVerb`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <TitleMeaning />
      <DescriptionMeaning />
    </div>
  );
};

export default ContainMeaningVerb;
