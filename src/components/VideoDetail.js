import React, { Fragment } from "react";

 const VideoDetail = ({ selectedVideo }) => {
   // This is watching state, updating state react should re-render the state. Remember this one.
  if (!selectedVideo) {
    return <div>Loading...Please Wait</div>
  }
  //Very Important from Line 5-7

   const videoId = selectedVideo.id.videoId;
   const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Fragment>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={videoUrl}
          allowFullScreen
        />
      </div>
      <h2>{selectedVideo.snippet.title}</h2>
      <p>{selectedVideo.snippet.description}</p>
    </Fragment>
  );
};

export default VideoDetail;
