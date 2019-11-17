import ActionType from '~/actions/films/action-types';

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
