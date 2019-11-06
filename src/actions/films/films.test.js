import * as action from '~/actions/films/films';
import {RESET_FILMS_PER_PAGE, SET_FILMS_PER_PAGE, SET_GENRE_FILTER} from '~/actions/films/action-types';

describe(`Films action creator work correctly`, () => {
  it(`Action creator for set genre filter return correctly action`, () => {
    expect(action.setGenreFilter(`Other genre`)).toEqual({
      type: SET_GENRE_FILTER,
      filter: `Other genre`
    });
  });

  it(`Action creator for set films per page return correctly action`, () => {
    expect(action.setFilmsPerPage(20)).toEqual({
      type: SET_FILMS_PER_PAGE,
      perPage: 20
    });
  });

  it(`Action creator for reset films per page return correctly action`, () => {
    expect(action.resetFilmsPerPage()).toEqual({
      type: RESET_FILMS_PER_PAGE
    });
  });
});
