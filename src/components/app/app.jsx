import React, {Fragment} from 'react';
import MainPage from '~/components/main-page/main-page';
import MoviePage from '~/components/movie-page/movie-page';
import {COMMENTS} from '~/moks/comments';
import Comment from '~/models/comment';
import {connect} from 'react-redux';
import * as filmsSelectors from "~/reducers/films/films";

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
      return <MainPage filmsList={filmsList}/>;
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

const matStateToProps = (state) => ({
  filmsList: filmsSelectors.getFilmsByGenre(state)
});

export {App};

export default connect(matStateToProps)(App);
