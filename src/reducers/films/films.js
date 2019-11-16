import * as actions from '~/actions/films/action-types';

const INIT_FILM_PER_PAGE = 8;
const ALL_GENRES = `All genres`;

const initialState = {
  filmsList: [],
  activeGenreFilter: ALL_GENRES,
  perPage: INIT_FILM_PER_PAGE
};

const films = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.SET_GENRE_FILTER:
      return Object.assign({}, state, {
        activeGenreFilter: action.payload
      });
    case actions.SET_FILMS_PER_PAGE:
      return Object.assign({}, state, {
        perPage: state.perPage + action.payload
      });
    case actions.RESET_FILMS_PER_PAGE:
      return Object.assign({}, state, {
        perPage: INIT_FILM_PER_PAGE
      });
    case actions.LOAD_FILMS:
      return Object.assign({}, state, {
        filmsList: action.payload
      });

    default:
      return state;
  }
};

// selectors
export const getGenres = (state) => {
  const {filmsList} = state.films;
  const genres = [...new Set(filmsList.map((film) => film.genre))];
  genres
    .sort()
    .unshift(ALL_GENRES);

  return genres;
};

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
