import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video({url,channel,song,description,likes,share,messages}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

    const onVideoPress = () => {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.play();
        setPlaying(true);
      }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} song={song} description={description}/>
      <VideoSidebar likes={likes} share={share} messages={messages}/>
    </div>
  );
}

export default Video;
