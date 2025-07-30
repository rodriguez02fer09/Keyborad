import React from "react";
import "../index.scss";
import Button  from "../Button";
import Title from "../Title";

const MainTitle = ({title, phonetic, urlAudio ,handlePlaying, onFinishedPlaying}) => {
  return (
    <div className="ContainTitleButton">
      <Title title={title} phonetic={phonetic} handlePlaying={handlePlaying} onFinishedPlaying={onFinishedPlaying}/>
      <Button urlAudio={urlAudio} />
    </div>
  );
};
export default MainTitle;
