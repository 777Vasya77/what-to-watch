import * as actions from '~/actions/films/action-types';

export const setGenreFilter = (filter) => ({
  type: actions.SET_GENRE_FILTER,
  payload: filter
});

export const setFilmsPerPage = (perPage) => ({
  type: actions.SET_FILMS_PER_PAGE,
  payload: perPage
});

export const resetFilmsPerPage = () => ({
  type: actions.RESET_FILMS_PER_PAGE,
});

export const loadFilms = (films) => ({
  type: actions.LOAD_FILMS,
  payload: films
});
