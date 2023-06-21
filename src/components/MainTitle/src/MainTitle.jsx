import React from "react";
import "../index.scss";
import Button  from "../Button";
import Title from "../Title";

const MainTitle = ({title, phonetic}) => {
  return (
    <div className="ContainTitleButton">
      <Title title={title} phonetic={phonetic} />
      <Button />
    </div>
  );
};
export default MainTitle;
