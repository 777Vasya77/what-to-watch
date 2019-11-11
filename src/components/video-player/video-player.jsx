import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const {isPlaying, src, previewImage} = props;
  const play = (video) => {
    if (!video) {
      return false;
    }

    if (isPlaying) {
      video.play();
    } else if (video.currentTime) {
      video.load();
    }

    return false;
  };

  return (
    <video
      ref={play}
      src={src}
      muted={true}
      poster={previewImage}
      width="280"
      height="175"
    />
  );
};


VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
