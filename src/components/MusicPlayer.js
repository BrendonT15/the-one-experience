import React, { useContext } from "react";
import MusicPlayerContext from './MusicPlayerContext';
import "./MusicPlayerStyles.css";
import {FaVolumeUp, FaVolumeMute} from "react-icons/fa";

const MusicPlayer = () => {
    const { mute, toggleMute } = useContext(MusicPlayerContext);

  return (
    <div className="volume" onClick={toggleMute}>
        {mute ? (<FaVolumeUp className="volume-icon" size={40}/>) : (<FaVolumeMute className="volume-icon" size={40}/>)}
    </div>
  );
};

export default MusicPlayer