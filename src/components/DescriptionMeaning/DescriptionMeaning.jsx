import React from "react";
import "./descriptionMeaning.scss";

const DescriptionMeaning = ({ isDark }) => {
  const defaultClass = `main-descriptionMeaning`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  return (
    <div className={`${defaultClass} ${custonClass}`}>
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
