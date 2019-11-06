import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MainPage from '~/components/main-page/main-page';
import MoviePage from '~/components/movie-page/movie-page';
import {COMMENTS} from '~/moks/comments';
import Comment from '~/models/comment';
import * as filmsSelectors from '~/reducers/films/films';

const START_INDEX = 0;
const SIMILAR_MOVIES_LIMIT = 4;
const search = new URLSearchParams(location.search);
const comments = Comment.parseComments(COMMENTS);

const redirectTo = (url) => {
  location.href = url;
  return false;
};

const getSimilarMovies = (currentMovie, movieList) => {
  return currentMovie && movieList.filter((film) => currentMovie.genre === film.genre && film.id !== currentMovie.id);
};

const getPageScreen = (propsData) => {
  const {filmsList} = propsData;
  switch (location.pathname) {
    case `/`:
      return <MainPage filmsList={filmsList} />;
    case `/films`:
      const movie = filmsList.find((film) => film.id === +search.get(`id`));
      const similarMovies = getSimilarMovies(movie, filmsList).slice(START_INDEX, SIMILAR_MOVIES_LIMIT);

      return movie ? <MoviePage film={movie} similarFilms={similarMovies} comments={comments}/> : redirectTo(`/`);
  }
  return redirectTo(`/`);
};

const App = (props) => {
  return <Fragment>{getPageScreen(props)}</Fragment>;
};

App.propTypes = {
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
};

const mapStateToProps = (state) => ({
  filmsList: filmsSelectors.getFilmsByGenre(state),
});

export {App};

export default connect(mapStateToProps)(App);
