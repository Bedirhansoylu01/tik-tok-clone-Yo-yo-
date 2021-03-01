import React from 'react';
import "./App.css";
import Video from "./Video";
import danielle from './danielle.mp4';
function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__videos">
      <Video vid={danielle} channel={"test"} song={"music"} description={"awesome"} likes={12} share={7} messages={25}/>
      <Video  vid={danielle} channel={"test"} song={"music"} description={"awesome"} likes={12} share={7} messages={25}/>
    </div>
    </div>
  );
}

export default App;
