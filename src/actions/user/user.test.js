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
});
