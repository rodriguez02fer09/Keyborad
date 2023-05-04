import React from "react";
import "./modeFonts.scss";
import List from "../../assets/select-list.svg";

const ModeFonts = () => {
  return (
    <div className="modeFonts">
      <div>
        <ul>
          <li> Sans Serif</li>
        </ul>
      </div>
      <div>
        <img src={List} alt="" />
      </div>
    </div>
  );
};

export default ModeFonts;
