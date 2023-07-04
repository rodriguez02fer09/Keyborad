import React, { useContext } from "react";
import "../index.scss";
import { AppContext } from "../../../../context/index";

const DescriptionMeaning = ({ isDark, definitions }) => {
  const defaultClass = `main-descriptionMeaning`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  const { fontStyle } = useContext(AppContext);
 debugger
  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <ul>
        {definitions && definitions.length > 0 && definitions.map(({definition,example}, index) => (
            <React.Fragment key={index}>
            <li style={{ fontFamily: fontStyle }}>{definition}</li>
            <p>{example}</p>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionMeaning;
