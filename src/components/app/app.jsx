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
import AddReview from "~/components/add-review/add-review";
import withIsValid from "~/hocs/with-is-valid/with-is-valid";
import PrivateRoute from "~/components/private-route/private-route";

const MoviePageWrapped = withActiveItem(MoviePage);

const App = (props) => {
  const {filmsList, onUserLogin, isReady} = props;

  if (!isReady) {
    return false;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={() => <SignIn onFormSubmit={onUserLogin}/>} />
        <Route path="/" exact component={() => <MainPage filmsList={filmsList} />} />
        <Route path="/films/:id" exact component={MoviePageWrapped} />
        <PrivateRoute path="/films/:id/review" exact component={withIsValid(AddReview)} />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  isReady: PropTypes.bool.isRequired,
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
  })),
  onUserLogin: PropTypes.func,
};

const matStateToProps = (state) => ({
  isReady: selectors.general.isReady(state),
  filmsList: selectors.films.visibleFilmsListSelector(state),
  isAuthorizationRequired: selectors.user.getAuthorizationStatus(state),
});

export {App};

export default connect(matStateToProps)(App);
