import React,{useEffect, useState} from 'react';
import "./App.css";
import axios from './axios.js';
import Video from "./Video";


function App() {

  const [videos,setVideos]= useState([])

  useEffect(() => {
    async function fetchPosts(){
      const response= await axios.get("/post/video");
      setVideos(response.data);
      return response;
    }  
    fetchPosts();
  },[]);

  console.log(videos);

  return (
    //BEM naming convention
    <div className="app">
      <div className="app__videos">
      {videos.map(
        ({url,channel,song,description,likes,shares,messages})=>(
      <Video 
      url={url} 
      channel={channel}
      song={song}
      description={description}
      likes={likes} 
      share={shares} 
      messages={messages}
      />
      )
      )}
    </div>
    </div>
  );
}

export default App;
