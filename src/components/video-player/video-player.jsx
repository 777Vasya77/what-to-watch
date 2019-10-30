import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isMute: true,
      isPlaying: props.isPlaying,
      isLoading: true
    };
  }

  componentDidMount() {
    const {src, previewImage} = this.props;
    const {isMute} = this.state;
    const video = this._videoRef.current;

    video.src = src;
    video.muted = isMute;
    video.poster = previewImage;

    video.oncanplaythrough = () => {
      this.setState({
        isLoading: false,
      });
    };

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => {
      this.setState({
        isPlaying: false,
      });
    };

    video.ontimeupdate = () => {
      this.setState({
        progress: video.currentTime
      });
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.src = ``;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"/>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default VideoPlayer;
