import ActionType from '~/actions/user/action-types';

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setAuth = (auth) => ({
  type: ActionType.SET_AUTH,
  payload: auth,
});

export const addFilmToMyList = (film) => ({
  type: ActionType.ADD_FILM,
  payload: film,
});

export const removeFilmToMyList = (film) => ({
  type: ActionType.REMOVE_FILM,
  payload: film,
});

export const initMyListFilms = (films) => ({
  type: ActionType.INIT_MY_LIST_FILM,
  payload: films
});

export const setFilmListLoading = (films) => ({
  type: ActionType.SET_MY_FILM_LIST_LOADING,
  payload: films
});
