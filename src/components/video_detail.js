// do you need stat? no! can use props
//just need simple functional components
import React from 'react';

//define func components
//if video not provided show loading..
const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  //need access to embed url
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //need to provide iframe a url
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-repsonsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
