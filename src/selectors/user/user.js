import {createSelector} from 'reselect';

const getAuthorizationStatus = (state) => state.user.isAuthorizationRequired;
const getAuthUser = (state) => state.user.auth;

const isAuth = createSelector(
    getAuthUser,
    (authUser) => Boolean(authUser)
);

const myFilmListSelectors = (state) => state.user.myFilmList;

const myFilmListIsLoading = (state) => state.user.myFilmListLoading;

export const user = {
  getAuthorizationStatus,
  getAuthUser,
  isAuth,
  myFilmListSelectors,
  myFilmListIsLoading,
};
