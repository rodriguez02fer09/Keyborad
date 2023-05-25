import React,{useContext} from "react";
import "./descriptionMeaning.scss";
import {FontContext} from "../../context/index"


const DescriptionMeaning = ({ isDark }) => {
  const defaultClass = `main-descriptionMeaning`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  const { fontStyle } = useContext(FontContext)

  return (
    <div className={`${defaultClass} ${custonClass}`}
    style={{ fontFamily: fontStyle }}>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo sint
          corporis temporibus, cupiditate, consectetur tenetur eaque aliquid
          itaque eum autem vitae laboriosam laudantium magnam. Amet accusantium
          ipsam adipisci minima.
        </li>
      </ul>
    </div>
  );
};

export default DescriptionMeaning;
