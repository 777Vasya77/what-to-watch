import {selectors} from '~/selectors/selectors';

describe(`Film selectors work correctly`, () => {
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
});
