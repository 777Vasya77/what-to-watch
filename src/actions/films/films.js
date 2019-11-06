import {RESET_FILMS_PER_PAGE, SET_FILMS_PER_PAGE, SET_GENRE_FILTER} from '~/actions/films/action-types';

export const setGenreFilter = (filter) => ({
  type: SET_GENRE_FILTER,
  filter
});

export const setFilmsPerPage = (perPage) => ({
  type: SET_FILMS_PER_PAGE,
  perPage
});

export const resetFilmsPerPage = () => ({
  type: RESET_FILMS_PER_PAGE,
});
