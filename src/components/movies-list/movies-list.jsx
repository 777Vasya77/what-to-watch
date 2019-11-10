import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

const MoviesList = (props) => {
  const {filmsList, onChangeActiveItem} = props;

  const handleMovieCardMouseEnter = (film) => {
    onChangeActiveItem(film);
  };

  const handleMovieCardMouseLeave = () => {
    onChangeActiveItem(null);
  };

  return (
    <div className="catalog__movies-list">
      {filmsList.map((film) => {
        return (
          <SmallMovieCard
            film={film}
            onMovieCardMouseEnter={handleMovieCardMouseEnter}
            onMovieCardMouseLeave={handleMovieCardMouseLeave}
            key={film.id}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.exact({
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
  })).isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
};

export default MoviesList;
