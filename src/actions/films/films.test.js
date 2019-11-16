import {actions} from '~/actions/actions';
import {RESET_FILMS_PER_PAGE, SET_FILMS_PER_PAGE, SET_GENRE_FILTER} from '~/actions/films/action-types';

describe(`Films action creator work correctly`, () => {
  it(`Action creator for set genre filter return correctly action`, () => {
    expect(actions.films.setGenreFilter(`Other genre`)).toEqual({
      type: SET_GENRE_FILTER,
      payload: `Other genre`
    });
  });

  it(`Action creator for set films per page return correctly action`, () => {
    expect(actions.films.setFilmsPerPage(20)).toEqual({
      type: SET_FILMS_PER_PAGE,
      payload: 20
    });
  });

  it(`Action creator for reset films per page return correctly action`, () => {
    expect(actions.films.resetFilmsPerPage()).toEqual({
      type: RESET_FILMS_PER_PAGE
    });
  });
});
