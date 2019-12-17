import ActionType from '~/actions/films/action-types';

export const setLoading = (loadingStatus) => ({
  type: ActionType.SET_LOADING,
  payload: loadingStatus
});

export const setError = (error) => ({
  type: ActionType.SET_ERROR,
  payload: {error}
});

export const setGenreFilter = (filter) => ({
  type: ActionType.SET_GENRE_FILTER,
  payload: filter
});

export const setFilmsPerPage = (perPage) => ({
  type: ActionType.SET_FILMS_PER_PAGE,
  payload: perPage
});

export const resetFilmsPerPage = () => ({
  type: ActionType.RESET_FILMS_PER_PAGE,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const loadPromoFilms = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film
});
