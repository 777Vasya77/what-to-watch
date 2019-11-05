import * as action from "~/actions/films/films";
import {SET_GENRE_FILTER} from "~/actions/films/action-types";

describe(``, () => {
  it(`Action creator for set genre filter return correctly action`, () => {
    expect(action.setGenreFilter(`Other genre`)).toEqual({
      type: SET_GENRE_FILTER,
      filter: `Other genre`
    });
  });
});
