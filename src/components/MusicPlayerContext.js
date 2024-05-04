import React, { createContext, useState } from 'react';
import Where_is_the_Road from "../assets/Where_is_the_Road.mp3";
const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
  const [audio] = useState(new Audio(Where_is_the_Road));
  const [mute, setMute] = useState(false);
  audio.loop = true;
  const toggleMute = () => {
    setMute(!mute);
    if (!mute) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <MusicPlayerContext.Provider value={{ audio, mute, toggleMute }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerContext;