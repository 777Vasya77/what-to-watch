import {createSelector} from 'reselect';

const getAuthorizationStatus = (state) => state.user.isAuthorizationRequired;
const getAuthUser = (state) => state.user.auth;

const isAuth = createSelector(
    getAuthUser,
    (authUser) => Boolean(authUser)
);

const myFilmListSelectors = (state) => state.myFilmList;

export const user = {
  getAuthorizationStatus,
  getAuthUser,
  isAuth,
  myFilmListSelectors,
};
