import {actions} from '~/actions/actions';
import ActionType from '~/actions/user/action-types';

describe(`User action creator work correctly`, () => {
  it(`Action creator for set requireAuthorization return correctly action`, () => {
    expect(actions.user.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });

  it(`Action creator for set setAuth return correctly action`, () => {
    expect(actions.user.setAuth({
      name: `user`,
      email: `email`
    })).toEqual({
      type: ActionType.SET_AUTH,
      payload: {
        name: `user`,
        email: `email`
      }
    });
  });

  it(`Action creator for addFilmToMyList return correctly action`, () => {
    expect(actions.user.addFilmToMyList({film: 1})).toEqual({
      type: ActionType.ADD_FILM,
      payload: {film: 1}
    });
  });

  it(`Action creator for removeFilmToMyList return correctly action`, () => {
    expect(actions.user.removeFilmToMyList({film: 1})).toEqual({
      type: ActionType.REMOVE_FILM,
      payload: {film: 1}
    });
  });

  it(`Action creator for initMyListFilms return correctly action`, () => {
    expect(actions.user.initMyListFilms([{film: 1}])).toEqual({
      type: ActionType.INIT_MY_LIST_FILM,
      payload: [{film: 1}]
    });
  });
});
