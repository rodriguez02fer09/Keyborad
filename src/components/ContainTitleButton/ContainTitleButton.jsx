import React from "react";
import "./containTitleButton.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const ContainTitleButton = () => {
  return (
    <div className="ContainTitleButton">
      <Title />
      <Button />
    </div>
  );
};
export default ContainTitleButton;
