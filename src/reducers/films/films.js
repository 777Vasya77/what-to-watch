import {FILMS} from '~/moks/films';
import Film from '~/models/film';
import {RESET_FILMS_PER_PAGE, SET_FILMS_PER_PAGE, SET_GENRE_FILTER} from '~/actions/films/action-types';

const INIT_FILM_PER_PAGE = 8;
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
  perPage: INIT_FILM_PER_PAGE
};

const films = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GENRE_FILTER:
      return Object.assign({}, state, {
        activeGenreFilter: action.filter
      });
    case SET_FILMS_PER_PAGE:
      return Object.assign({}, state, {
        perPage: state.perPage + action.perPage
      });
    case RESET_FILMS_PER_PAGE:
      return Object.assign({}, state, {
        perPage: INIT_FILM_PER_PAGE
      });

    default:
      return state;
  }
};

// selectors
export const getFilmsByGenre = (state, slice = true) => {
  const {
    activeGenreFilter: activeFilter,
    filmsList: allFilms,
  } = state.films;

  const movies = (activeFilter === ALL_GENRES)
    ? allFilms
    : allFilms.filter((film) => film.genre === activeFilter);

  return (slice) ? movies.slice(0, state.films.perPage) : movies;
};

export const getActiveGenre = (state) => state.films.activeGenreFilter;

export const getIsAllFilmsLoaded = (state) => {
  const {
    activeGenreFilter: activeFilter,
    filmsList: allFilms,
    perPage
  } = state.films;

  return (activeFilter === ALL_GENRES)
    ? perPage >= allFilms.length
    : perPage >= getFilmsByGenre(state, false).length;
};

export default films;
