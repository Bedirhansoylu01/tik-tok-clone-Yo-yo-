import React from 'react';
import "./App.css";
import Video from "./Video";
import yvette from './media/yvette.mp4';
import him from './media/himym.mp4';


function App() {
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__videos">
      <Video vid={yvette} channel={"test"} song={"music"} description={"awesome"} likes={12} share={7} messages={25}/>
      <Video  vid={him} channel={"test"} song={"music"} description={"awesome"} likes={12} share={7} messages={25}/>
    </div>
    </div>
  );
}

export default App;
