import React, { useContext } from "react";
import "../index.scss";
import { AppContext } from "../../../../context/index";
import TitleMeaning from "../../TitleMeaning";

const ContainMeaningVerb = ({ isDark }) => {
  const defaultClass = `main-containMeaningVerb`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  const { fontStyle } = useContext(AppContext);
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <TitleMeaning />
      <div className={`${defaultClass} ${custonClass}`}>
        <ul>
          <li style={{ fontFamily: fontStyle }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo
            sint corporis temporibus, cupiditate, consectetur tenetur eaque
            aliquid itaque eum autem vitae laboriosam laudantium magnam. Amet
            accusantium ipsam adipisci minima.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContainMeaningVerb;
