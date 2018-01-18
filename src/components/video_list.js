import React from 'react';
import VideoListItem from './video_list_item';
//add a class to ul
//functional video list component with an array of videos to render
// video list component see props which contains an array of videos.
//adding key = needs to consistent & unique piece of info. - etag
const VideoList = (props) => {
   const videoItems = props.videos.map((video) => {
     return <VideoListItem key={video.etag} video={video} />
   });

    return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
