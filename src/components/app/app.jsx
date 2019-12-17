import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '~/components/main-page/main-page';
import {Router, Route, Switch} from 'react-router-dom';

import MoviePage from '~/components/movie-page/movie-page';
import {connect} from 'react-redux';
import withActiveItem from '~/hocs/with-active-item/with-active-item';
import {selectors} from '~/selectors/selectors';
import SignIn from '~/components/sign-in/sign-in';
import history from '~/history';
import AddReview from '~/components/add-review/add-review';
import withIsValid from '~/hocs/with-is-valid/with-is-valid';
import PrivateRoute from '~/components/private-route/private-route';
import MyList from '~/components/my-list/my-list';
import VideoPlayer from '~/components/video-player/video-player';
import withFullScreen from '~/hocs/with-full-screen/with-full-screen';
import {actions} from '~/actions/actions';

const MoviePageWrapped = withActiveItem(MoviePage);
const VideoPlayerWrapped = withFullScreen(VideoPlayer);

const App = (props) => {
  const {filmsList, onUserLogin, isReady, isNowFilmPlayingSelector, filmPlayingNow, resetPlayingFilm} = props;

  if (!isReady) {
    return false;
  }

  if (isNowFilmPlayingSelector) {
    const {videoLink: src, previewImage} = filmPlayingNow;
    return <VideoPlayerWrapped src={src} previewImage={previewImage} onFullScreeExit={resetPlayingFilm}/>;
  }

  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute guest path="/login" exact component={() => <SignIn onFormSubmit={onUserLogin}/>} />
        <Route path="/" exact component={() => <MainPage filmsList={filmsList} />} />
        <Route path="/films/:id" exact component={MoviePageWrapped} />
        <PrivateRoute path="/films/:id/review" exact component={withIsValid(AddReview)} />
        <PrivateRoute path="/mylist" exact component={MyList} />
      </Switch>
    </Router>
  );
};

const filmValidate = {
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

App.propTypes = {
  isReady: PropTypes.bool.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.exact(filmValidate)),
  onUserLogin: PropTypes.func,
  isNowFilmPlayingSelector: PropTypes.bool,
  filmPlayingNow: PropTypes.exact(filmValidate),
  resetPlayingFilm: PropTypes.func,
};

const matStateToProps = (state) => ({
  isReady: selectors.general.isReady(state),
  filmsList: selectors.films.visibleFilmsListSelector(state),
  isAuthorizationRequired: selectors.user.getAuthorizationStatus(state),
  isNowFilmPlayingSelector: selectors.films.isNowFilmPlayingSelector(state),
  filmPlayingNow: selectors.films.getFilmPlayingNow(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetPlayingFilm: () => dispatch(actions.films.setPlayingFilmNow(null))
});

export {App};

export default connect(matStateToProps, mapDispatchToProps)(App);
