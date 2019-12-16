import {actions} from '~/actions/actions';
import ActionType from '~/actions/films/action-types';

describe(`Films action creator work correctly`, () => {
  it(`Action creator for set loading return correctly action`, () => {
    expect(actions.films.setLoading(true)).toEqual({
      type: ActionType.SET_LOADING,
      payload: true
    });
  });

  it(`Action creator for set error return correctly action`, () => {
    expect(actions.films.setError({
      status: 404
    })).toEqual({
      type: ActionType.SET_ERROR,
      payload: {
        error: {status: 404}
      }
    });
  });

  it(`Action creator for set genre filter return correctly action`, () => {
    expect(actions.films.setGenreFilter(`Other genre`)).toEqual({
      type: ActionType.SET_GENRE_FILTER,
      payload: `Other genre`
    });
  });

  it(`Action creator for set films per page return correctly action`, () => {
    expect(actions.films.setFilmsPerPage(20)).toEqual({
      type: ActionType.SET_FILMS_PER_PAGE,
      payload: 20
    });
  });

  it(`Action creator for reset films per page return correctly action`, () => {
    expect(actions.films.resetFilmsPerPage()).toEqual({
      type: ActionType.RESET_FILMS_PER_PAGE
    });
  });

  it(`Action creator for load films return correctly action`, () => {
    expect(actions.films.loadFilms([
      {film: 1}
    ])).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: [{film: 1}]
    });
  });
});
