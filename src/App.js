import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PageThree from "./routes/PageThree";
import PageFour from "./routes/PageFour";
import PageFive from "./routes/PageFive";
import PageSix from "./routes/PageSix";
import PageSeven from "./routes/PageSeven";
import PageEight from "./routes/PageEight";
import MusicPlayer from "./components/MusicPlayer";
import {MusicPlayerProvider} from "./components/MusicPlayerContext";

function App() {

  return (
    <MusicPlayerProvider>
      <div>
      <MusicPlayer/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/page-two" element={<PageThree/>}/>
        <Route path="/page-three" element={<PageFour/>}/>
        <Route path="/page-four" element={<PageFive/>}/>
        <Route path="/page-five" element={<PageSix/>}/>
        <Route path="/page-six" element={<PageSeven/>}/>
        <Route path="/page-seven" element={<PageEight/>}/>
      </Routes>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
