import {createSelector} from 'reselect';

const ALL_GENRES = `All genres`;

const filmsSelector = (state) => state.films.filmsList;
const activeGenreSelector = (state) => state.films.activeGenreFilter;
const perPageSelector = (state) => state.films.perPage;
const loading = (state) => state.films.loading;
const error = (state) => state.films.error;

const genresSelector = createSelector(
    filmsSelector,
    (films) => {
      const genres = [...new Set(films.map((film) => film.genre))];
      genres
        .sort()
        .unshift(ALL_GENRES);

      return genres;
    }
);

const filmsByGenreSelector = createSelector(
    filmsSelector,
    activeGenreSelector,
    (films, activeGenre) => {
      return (activeGenre === ALL_GENRES)
        ? films
        : films.filter((film) => film.genre === activeGenre);
    }
);

const visibleFilmsListSelector = createSelector(
    filmsByGenreSelector,
    perPageSelector,
    (films, perPage) => films.slice(0, perPage)
);

const isAllFilmsLoadedSelector = createSelector(
    filmsByGenreSelector,
    visibleFilmsListSelector,
    (films, visibleFilms) => visibleFilms.length >= films.length
);

const getFilmById = (state, filmId) => state.films.filmsList.find((item) => item.id === +filmId);

const getSimilarFilmsSelector = (state, filmId) => {
  const currentFilm = getFilmById(state, filmId);
  const filmsList = filmsSelector(state);

  return filmsList.filter((film) => film.genre === currentFilm.genre && film.id !== currentFilm.id);
};

const getFavoriteFilmList = createSelector(
    filmsSelector,
    (films) => films.filter((film) => film.isFavorite)
);

const isFavoriteSelector = (state, filmId) => state.films.filmsList.find((item) => item.id === +filmId).isFavorite;

const getPromoFilmSelector = (state) => state.films.promoFilm;

export const films = {
  loading,
  error,
  filmsSelector,
  activeGenreSelector,
  genresSelector,
  perPageSelector,
  filmsByGenreSelector,
  visibleFilmsListSelector,
  isAllFilmsLoadedSelector,
  getFilmById,
  getSimilarFilmsSelector,
  isFavoriteSelector,
  getFavoriteFilmList,
  getPromoFilmSelector,
};
