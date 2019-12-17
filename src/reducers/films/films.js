import ActionType from '~/actions/films/action-types';

const INIT_FILM_PER_PAGE = 8;
const ALL_GENRES = `All genres`;

const initialState = {
  loading: false,
  error: null,
  filmsList: [],
  activeGenreFilter: ALL_GENRES,
  perPage: INIT_FILM_PER_PAGE,
  promoFilm: null,
  playingFilmNow: null
};

const films = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return Object.assign({}, state, {
        loading: action.payload
      });
    case ActionType.SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload.error
      });
    case ActionType.SET_GENRE_FILTER:
      return Object.assign({}, state, {
        activeGenreFilter: action.payload
      });
    case ActionType.SET_FILMS_PER_PAGE:
      return Object.assign({}, state, {
        perPage: state.perPage + action.payload
      });
    case ActionType.RESET_FILMS_PER_PAGE:
      return Object.assign({}, state, {
        perPage: INIT_FILM_PER_PAGE
      });
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        filmsList: action.payload
      });
    case ActionType.LOAD_PROMO_FILM:
      return Object.assign({}, state, {
        promoFilm: action.payload
      });
    case ActionType.SET_PLAYING_FILM_NOW:
      return Object.assign({}, state, {
        playingFilmNow: action.payload
      });
    default:
      return state;
  }
};

export default films;
