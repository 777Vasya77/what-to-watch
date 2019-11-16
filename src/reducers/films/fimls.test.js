import films, {getActiveGenre, getFilmsByGenre, getGenres, getIsAllFilmsLoaded} from '~/reducers/films/films';
import {SET_FILMS_PER_PAGE, SET_GENRE_FILTER} from "~/actions/films/action-types";

const INITIAL_STATE = {
  activeGenreFilter: `Some genre`
};
describe(`Reducer work correctly`, () => {
  it(`Reducer should correctly set new active filter by genre`, () => {
    expect(films(INITIAL_STATE, {
      type: SET_GENRE_FILTER,
      payload: `Other genre`
    })).toEqual({
      activeGenreFilter: `Other genre`
    });
  });

  it(`Reducer should correctly set new value for films perPage property`, () => {
    expect(films({perPage: 8}, {
      type: SET_FILMS_PER_PAGE,
      payload: 20
    })).toEqual({perPage: 28});
  });
});

describe(`Film selectors work correctly`, () => {
  it(`Selector getGenres work correctly`, () => {
    expect(getGenres({
      films: {
        filmsList: [{genre: `test`}, {genre: `test-1`}],
      }
    })).toEqual([`All genres`, `test`, `test-1`]);
  });

  it(`Selector getFilmsByGenre work correctly`, () => {
    expect(getFilmsByGenre({
      films: {
        filmsList: [{genre: `test`}, {genre: `test-1`}],
        activeGenreFilter: `test`,
      }
    })).toEqual([{genre: `test`}]);
  });

  it(`Selector getActiveGenre work correctly`, () => {
    expect(getActiveGenre({
      films: {
        activeGenreFilter: `genre`
      }
    })).toEqual(`genre`);
  });

  it(`Selector getIsAllFilmsLoaded return TRUE if all films is loaded`, () => {
    expect(getIsAllFilmsLoaded({
      films: {
        filmsList: [{genre: `test`}, {genre: `test`}],
        activeGenreFilter: `All genres`,
        perPage: 2
      }
    })).toEqual(true);
  });

  it(`Selector getIsAllFilmsLoaded return FALSE if all films is not loaded`, () => {
    expect(getIsAllFilmsLoaded({
      films: {
        filmsList: [{genre: `test`}, {genre: `test`}],
        activeGenreFilter: `All genres`,
        perPage: 1
      }
    })).toEqual(false);
  });
});
