import {FILMS} from '~/moks/films';
import Film from '~/models/film';
import {SET_GENRE_FILTER} from '~/actions/films/action-types';

const ALL_GENRES = `All genres`;
const filmsList = Film.parseFilms(FILMS);
const activeGenreFilter = ALL_GENRES;

export const getGenres = (films = filmsList) => {
  const filmsArray = [...new Set(films.map((film) => film.genre))];
  filmsArray
    .sort()
    .unshift(ALL_GENRES);

  return filmsArray;
};

const genres = getGenres();

const initialState = {
  filmsList,
  genres,
  activeGenreFilter,
};

const films = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GENRE_FILTER:
      return Object.assign({}, state, {
        activeGenreFilter: action.filter
      });

    default:
      return state;
  }
};

// selectors
export const getFilmsByGenre = (state) => {
  const activeFilter = state.films.activeGenreFilter;
  return (activeFilter === ALL_GENRES)
    ? state.films.filmsList
    : state.films.filmsList.filter((film) => film.genre === activeFilter);
};

export const getActiveGenre = (state) => state.films.activeGenreFilter;

export default films;
