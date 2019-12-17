import {selectors} from '~/selectors/selectors';

describe(`Film selectors work correctly`, () => {
  it(`filmsSelector work correctly`, () => {
    expect(selectors.films.filmsSelector({
      films: {
        filmsList: [{film: `test`}, {film: `test-1`}],
      }
    })).toEqual([{film: `test`}, {film: `test-1`}]);
  });

  it(`genresSelector work correctly`, () => {
    expect(selectors.films.genresSelector({
      films: {
        filmsList: [{genre: `test`}, {genre: `test-1`}],
      }
    })).toEqual([`All genres`, `test`, `test-1`]);
  });

  it(`filmsByGenreSelector work correctly`, () => {
    expect(selectors.films.filmsByGenreSelector({
      films: {
        filmsList: [{genre: `test`}, {genre: `test-1`}],
        activeGenreFilter: `test`,
      }
    })).toEqual([{genre: `test`}]);
  });

  it(`getActiveGenre work correctly`, () => {
    expect(selectors.films.activeGenreSelector({
      films: {
        activeGenreFilter: `genre`
      }
    })).toEqual(`genre`);
  });

  it(`perPageSelector work correctly`, () => {
    expect(selectors.films.perPageSelector({
      films: {
        perPage: `4`
      }
    })).toEqual(`4`);
  });

  it(`loading work correctly`, () => {
    expect(selectors.films.loading({
      films: {
        loading: true
      }
    })).toEqual(true);
  });

  it(`error work correctly`, () => {
    expect(selectors.films.error({
      films: {
        error: {
          error: true
        }
      }
    })).toEqual({
      error: true
    });
  });

  it(`isAllFilmsLoadedSelector return TRUE if all films is loaded`, () => {
    expect(selectors.films.isAllFilmsLoadedSelector({
      films: {
        filmsList: [{genre: `test`}, {genre: `test`}],
        activeGenreFilter: `All genres`,
        perPage: 2
      }
    })).toEqual(true);
  });

  it(`isAllFilmsLoadedSelector return FALSE if all films is not loaded`, () => {
    expect(selectors.films.isAllFilmsLoadedSelector({
      films: {
        filmsList: [{genre: `test`}, {genre: `test`}],
        activeGenreFilter: `All genres`,
        perPage: 1
      }
    })).toEqual(false);
  });

  it(`getFilmPlayingNow work correctly`, () => {
    expect(selectors.films.getFilmPlayingNow({
      films: {
        playingFilmNow: {film: 1}
      }
    })).toEqual({film: 1});
  });

  it(`isNowFilmPlayingSelector work correctly`, () => {
    expect(selectors.films.isNowFilmPlayingSelector({
      films: {
        playingFilmNow: {film: 1}
      }
    })).toEqual(true);
  });

  it(`getPromoFilmSelector work correctly`, () => {
    expect(selectors.films.getPromoFilmSelector({
      films: {
        promoFilm: {film: 1}
      }
    })).toEqual({film: 1});
  });

});
