import films from '~/reducers/films/films';
import ActionType from '~/actions/films/action-types';

const INITIAL_STATE = {
  activeGenreFilter: `Some genre`
};
describe(`Reducer work correctly`, () => {
  it(`Reducer should correctly set new active filter by genre`, () => {
    expect(films(INITIAL_STATE, {
      type: ActionType.SET_GENRE_FILTER,
      payload: `Other genre`
    })).toEqual({
      activeGenreFilter: `Other genre`
    });
  });

  it(`Reducer should correctly set new value for films perPage property`, () => {
    expect(films({perPage: 8}, {
      type: ActionType.SET_FILMS_PER_PAGE,
      payload: 20
    })).toEqual({perPage: 28});
  });
});
