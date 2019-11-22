import React, {Fragment} from 'react';
import MainPage from '~/components/main-page/main-page';
import MoviePage from '~/components/movie-page/movie-page';
import {COMMENTS} from '~/moks/comments';
import Comment from '~/models/comment';
import {connect} from 'react-redux';
import withActiveItem from '~/hocs/with-active-item/with-active-item';
import {selectors} from '~/selectors/selectors';
import SignIn from '~/components/sign-in/sign-in';

const START_INDEX = 0;
const SIMILAR_MOVIES_LIMIT = 4;
const search = new URLSearchParams(location.search);
const comments = Comment.parseComments(COMMENTS);
const MoviePageWrapped = withActiveItem(MoviePage);

const redirectTo = (url) => {
  location.href = url;
  return false;
};

const getSimilarMovies = (currentMovie, movieList) => {
  return currentMovie && movieList.filter((film) => currentMovie.genre === film.genre && film.id !== currentMovie.id);
};

const getPageScreen = (propsData) => {
  const {filmsList, isAuthorizationRequired, userLogin} = propsData;

  if (isAuthorizationRequired) {
    return <SignIn onFormSubmit={userLogin}/>;
  }

  switch (location.pathname) {
    case `/`:
      return <MainPage filmsList={filmsList}/>;
    case `/films`:
      const movie = filmsList.find((film) => film.id === +search.get(`id`));
      const similarMovies = getSimilarMovies(movie, filmsList).slice(START_INDEX, SIMILAR_MOVIES_LIMIT);

      return movie ? <MoviePageWrapped film={movie} similarFilms={similarMovies} comments={comments}/> : redirectTo(`/`);
  }
  return redirectTo(`/`);
};

const App = (props) => {
  return <Fragment>{getPageScreen(props)}</Fragment>;
};

const matStateToProps = (state) => ({
  filmsList: selectors.films.visibleFilmsListSelector(state),
  isAuthorizationRequired: selectors.user.getAuthorizationStatus(state),
});

export {App};

export default connect(matStateToProps)(App);
