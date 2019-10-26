import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import MainPage from '~/components/main-page/main-page';
import MoviePage from '~/components/movie-page/movie-page';

const redirectTo = (url) => {
  location.href = url;
  return false;
};

const getPageScreen = (propsData) => {
  const {filmsList} = propsData;
  switch (location.pathname) {
    case `/`:
      return <MainPage filmsList={filmsList}/>;
    case `/films`:
      const movie = filmsList.find((film) => film.id === +location.hash.replace(`#`, ``));
      return movie ? <MoviePage film={movie}/> : redirectTo(`/`);
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
  })).isRequired
};

export default App;
