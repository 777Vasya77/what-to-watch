import films from '~/reducers/films/films';
import ActionType from '~/actions/films/action-types';

describe(`Films reducer work correctly`, () => {
  it(`Films reducer should correctly set new loading status`, () => {
    expect(films({
      loading: false
    }, {
      type: ActionType.SET_LOADING,
      payload: true
    })).toEqual({
      loading: true
    });
  });

  it(`Films reducer should correctly set error data`, () => {
    expect(films({
      error: null
    }, {
      type: ActionType.SET_ERROR,
      payload: {
        error: {
          message: `error`
        }
      }
    })).toEqual({
      error: {
        message: `error`
      }
    });
  });

  it(`Films reducer should correctly set new active filter by genre`, () => {
    expect(films({
      activeGenreFilter: `genre`
    }, {
      type: ActionType.SET_GENRE_FILTER,
      payload: `Other genre`
    })).toEqual({
      activeGenreFilter: `Other genre`
    });
  });

  it(`Films reducer should correctly set new value for films perPage property`, () => {
    expect(films({
      perPage: 8
    }, {
      type: ActionType.SET_FILMS_PER_PAGE,
      payload: 20
    })).toEqual({
      perPage: 28
    });
  });

  it(`Films reducer should correctly reset films perPage value`, () => {
    expect(films({
      perPage: 20
    }, {
      type: ActionType.RESET_FILMS_PER_PAGE
    })).toEqual({
      perPage: 8
    });
  });

  it(`Films reducer should correctly load films`, () => {
    expect(films({
      filmsList: []
    }, {
      type: ActionType.LOAD_FILMS,
      payload: [{film: `1`}, {film: `2`}]
    })).toEqual({
      filmsList: [
        {film: `1`},
        {film: `2`}
      ]
    });
  });

  it(`Films reducer should correctly load promo film`, () => {
    expect(films({
      promoFilm: null
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {film: `1`}
    })).toEqual({
      promoFilm: {film: `1`}
    });
  });

  it(`Films reducer should correctly set playing film now`, () => {
    expect(films({
      playingFilmNow: null
    }, {
      type: ActionType.SET_PLAYING_FILM_NOW,
      payload: {film: `1`}
    })).toEqual({
      playingFilmNow: {film: `1`}
    });
  });
});
