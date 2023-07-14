import React, { useContext , useState} from "react";
import ReactSound from 'react-sound';
import { AppContext } from "../../../../context/index";;
import "../index.scss";
import BottonNormal from "../../../../assets/play-button-normal.svg";
import BottonHover from "../../../../assets/play-button-hover.svg";

const Button = ({urlAudio}) => {
  const { isDark } = useContext(AppContext);
  const [isPlay, setIsPlay] = useState (ReactSound.status.STOPPED)

  const handlePlaying = () => {
    setIsPlay(ReactSound.status.PLAYING);
  };

  const handleFinishedPlaying = () => {
    setIsPlay(ReactSound.status.STOPPED);
  };

  
  return (
    <div className="Button">
      <img onClick={handlePlaying} src={ isDark() ? BottonHover : BottonNormal} alt="Play Button"/>
      <ReactSound url={urlAudio} playStatus={isPlay} onFinishedPlaying={handleFinishedPlaying} />
    </div>
  );
};

export default Button;
