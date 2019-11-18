import React from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';
import Loader from '~/components/loader/loader';
import {selectors} from '~/selectors/selectors';
import {connect} from 'react-redux';

const DURATION = 1000;
let timerId;

const MoviesList = (props) => {
  const {filmsList, activeItem: activeFilm, onChangeActiveItem, loading} = props;

  const handleMovieCardMouseEnter = (film) => {
    timerId = setTimeout(() => {
      onChangeActiveItem(film);
    }, DURATION);
  };

  const handleMovieCardMouseLeave = () => {
    onChangeActiveItem(null);
    clearTimeout(timerId);
  };

  return (
    <div className="catalog__movies-list">
      {(loading) ? <Loader /> : filmsList.map((film) => {
        return (
          <SmallMovieCard
            film={film}
            onMovieCardMouseEnter={handleMovieCardMouseEnter}
            onMovieCardMouseLeave={handleMovieCardMouseLeave}
            key={film.id}
            isPlaying={film === activeFilm}
          />
        );
      })}
    </div>
  );
};

const filmRules = {
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
};

MoviesList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.exact(filmRules)).isRequired,
  onChangeActiveItem: PropTypes.func.isRequired,
  activeItem: PropTypes.exact(filmRules),
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: selectors.films.loading(state)
});

export {MoviesList};

export default connect(mapStateToProps)(MoviesList);
