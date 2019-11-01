import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const MoviePageOverview = (props) => {
  const {film} = props;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.ratingWithComma}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{film.ratingLevel}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{film.description}</p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starringString} and other</strong></p>
      </div>
    </Fragment>
  );
};

MoviePageOverview.propTypes = {
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
};

export default MoviePageOverview;
