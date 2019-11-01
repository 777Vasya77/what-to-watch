import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '~/components/video-player/video-player';

const DURATION = 1000;

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      timerId: 0
    };

    this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
    this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
  }

  _handleMovieCardMouseEnter() {
    const {film, onMovieCardMouseEnter} = this.props;
    onMovieCardMouseEnter(film);

    const timerId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, DURATION);

    this.setState({timerId});
  }

  _handleMovieCardMouseLeave() {
    const {onMovieCardMouseLeave} = this.props;

    clearTimeout(this.state.timerId);
    onMovieCardMouseLeave();
    this.setState({isPlaying: false});
  }

  render() {
    const {film} = this.props;
    const {name, previewImage, previewVideoLink} = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={this._handleMovieCardMouseEnter}
        onMouseLeave={this._handleMovieCardMouseLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            isPlaying={this.state.isPlaying}
            previewImage={previewImage}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={`/films?id=${film.id}`}>{name}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.exact({
    id: PropTypes.number,
    name: PropTypes.string,
    posterImage: PropTypes.string,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    runTime: PropTypes.number,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string,
  }).isRequired,
  onMovieCardMouseEnter: PropTypes.func.isRequired,
  onMovieCardMouseLeave: PropTypes.func.isRequired,
};

export default SmallMovieCard;
