import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import PageTwo from "./routes/PageTwo";
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
        <Route path="/page-two" element={<PageTwo />}/>
        <Route path="/page-three" element={<PageThree/>}/>
        <Route path="/page-four" element={<PageFour/>}/>
        <Route path="/page-five" element={<PageFive/>}/>
        <Route path="/page-six" element={<PageSix/>}/>
        <Route path="/page-seven" element={<PageSeven/>}/>
        <Route path="/page-eight" element={<PageEight/>}/>
      </Routes>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
