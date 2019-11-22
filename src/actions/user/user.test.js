import {actions} from '~/actions/actions';
import ActionType from '~/actions/user/action-types';

describe(`User action creator work correctly`, () => {
  it(`Action creator for set requireAuthorization return correctly action`, () => {
    expect(actions.user.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });
});
