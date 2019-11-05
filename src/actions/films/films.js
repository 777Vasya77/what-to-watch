import {SET_GENRE_FILTER} from '~/actions/films/action-types';

export const setGenreFilter = (filter) => ({
  type: SET_GENRE_FILTER,
  filter
});
