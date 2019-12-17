import React from 'react';
import PropTypes from 'prop-types';

const VideoEvent = {
  TIMEUPDATE: `timeupdate`
};

const VideoPlayer = (props) => {
  const {isPlaying, src, previewImage, fullScreenPlayer, updateBar} = props;
  const play = (video) => {
    if (!video) {
      return false;
    }

    if (updateBar) {
      video.addEventListener(VideoEvent.TIMEUPDATE, updateBar);
    }

    if (isPlaying) {
      video.play();
    } else if (video.currentTime && fullScreenPlayer) {
      video.pause();
    } else {
      video.load();
    }

    return false;
  };

  return (
    <video
      className="player__video"
      ref={play}
      src={src}
      muted={!fullScreenPlayer}
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
  fullScreenPlayer: PropTypes.bool,
  updateBar: PropTypes.func,
};

export default VideoPlayer;
