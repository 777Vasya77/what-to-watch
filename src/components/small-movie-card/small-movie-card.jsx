import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from '~/components/video-player/video-player';
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {film, isPlaying, onMovieCardMouseEnter, onMovieCardMouseLeave} = props;

  const handleMovieCardMouseEnter = () => {
    onMovieCardMouseEnter(film);
  };

  const handleMovieCardMouseLeave = () => {
    onMovieCardMouseLeave();
  };

  const {name, previewImage, previewVideoLink} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMovieCardMouseEnter}
      onMouseLeave={handleMovieCardMouseLeave}
    >
      <Link to={`/films/${film.id}`} style={{color: `unset`}}>
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            isPlaying={isPlaying}
            previewImage={previewImage}
          />
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{name}</span>
        </h3>
      </Link>
    </article>
  );
};

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
  isPlaying: PropTypes.bool.isRequired,
};

export default SmallMovieCard;
