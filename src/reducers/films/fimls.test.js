import films from '~/reducers/films/films';
import {SET_GENRE_FILTER} from "~/actions/films/action-types";

const INITIAL_STATE = {
  activeGenreFilter: `Some genre`
};
describe(`Reducer work correctly`, () => {
  it(`Reducer should correctly set new active filter by genre`, () => {
    expect(films(INITIAL_STATE, {
      type: SET_GENRE_FILTER,
      filter: `Other genre`
    })).toEqual({
      activeGenreFilter: `Other genre`
    });
  });
});
