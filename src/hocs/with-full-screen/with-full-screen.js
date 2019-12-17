import React, {Fragment, PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import playerTimeService from "~/services/player-time-service/player-time-service";
import {fullScreenService} from "~/services/full-screen-service/full-screen-service";

const withFullScreen = (Component) => {
  class WithFullScreen extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFullScreen: false,
        isPlaying: true,
        barWidth: 0,
        timeToEnd: 0,
      };

      this._videoWrapRef = createRef();

      this._handleChangeIsFullScreen = this._handleChangeIsFullScreen.bind(this);
      this._handlePlayButton = this._handlePlayButton.bind(this);
      this._handleExitButton = this._handleExitButton.bind(this);
      this._handleFullScreenButton = this._handleFullScreenButton.bind(this);
      this._updateBar = this._updateBar.bind(this);
    }

    _updateBar(evt) {
      const video = evt.target;
      const currentTime = video.currentTime;
      const duration = video.duration;

      this.setState({
        barWidth: currentTime / duration * 100,
        timeToEnd: duration - currentTime
      });
    }

    _handleChangeIsFullScreen(isFullScreen) {
      this.setState({isFullScreen});
    }

    _handlePlayButton() {
      const {isPlaying} = this.state;
      this.setState({isPlaying: !isPlaying});
    }

    _handleExitButton() {
      const {onFullScreeExit} = this.props;
      onFullScreeExit();
    }

    _handleFullScreenButton() {
      const {isFullScreen} = this.state;
      if (isFullScreen) {
        fullScreenService.close();
        this.setState({isFullScreen: false});
      } else {
        fullScreenService.open(this._videoWrapRef.current);
        this.setState({isFullScreen: true});
      }
    }

    render() {
      const {isFullScreen, isPlaying, barWidth, timeToEnd} = this.state;

      return (
        <div className="player" ref={this._videoWrapRef}>
          <Component
            {...this.props}
            fullScreenPlayer
            isPlaying={isPlaying}
            isFullScreen={isFullScreen}
            updateBar={this._updateBar}
            onChangeIsFullScreen={this._handleChangeIsFullScreen}
          />

          <button type="button" className="player__exit" onClick={this._handleExitButton}>Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={barWidth} max="100"/>
                <div className="player__toggler" style={{left: `${barWidth}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{playerTimeService(timeToEnd)}</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play" onClick={this._handlePlayButton}>
                {!isPlaying
                  ? (<Fragment>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </Fragment>)
                  : (<Fragment>
                    <svg viewBox="0 0 14 21" width="14" height="21">
                      <use xlinkHref="#pause" />
                    </svg>
                    <span>Pause</span>
                  </Fragment>)
                }
              </button>
              <div className="player__name">Transpotting</div>

              <button type="button" className="player__full-screen" onClick={this._handleFullScreenButton}>
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"/>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

  }

  WithFullScreen.propTypes = {
    onFullScreeExit: PropTypes.func,
  };

  return WithFullScreen;
};

export default withFullScreen;
