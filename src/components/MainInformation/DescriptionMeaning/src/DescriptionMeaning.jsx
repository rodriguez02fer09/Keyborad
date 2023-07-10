import React, { useContext } from "react";
import "../index.scss";
import { AppContext } from "../../../../context/index";

const DescriptionMeaning = ({ isDark, definitions }) => {
  const defaultClass = `main-descriptionMeaning`;
  const custonClass = `${isDark ? `${defaultClass}--dark` : `${defaultClass}`}`;
  const { theme, fontStyle } = useContext(AppContext);

  return (
    <div className={`${defaultClass} ${custonClass}`}>
      <ul className={`${defaultClass}__list ${custonClass}__list--${theme}`}>
        {definitions && definitions.length > 0 && definitions.map(({definition,example}, index) => (
            <React.Fragment key={index}>
            <li className={`${defaultClass}__list__desfinitions ${custonClass}__list__desfinitions--${theme}`} style={{ fontFamily: fontStyle }}>{definition}</li>
            <p>{example}</p>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default DescriptionMeaning;
