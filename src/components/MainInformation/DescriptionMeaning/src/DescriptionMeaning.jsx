import React,{useContext} from "react";
import "../index.scss";
import {AppContext} from "../../../../context/index"


const DescriptionMeaning = ({ isDark }) => {
  const defaultClass = `main-descriptionMeaning`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  const { fontStyle } = useContext(AppContext)

  return (
    <div className={`${defaultClass} ${custonClass}`}
   >
      <ul>
        <li  style={{ fontFamily: fontStyle }}>
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
