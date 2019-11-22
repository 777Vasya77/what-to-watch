import user from '~/reducers/user/user';
import ActionType from '~/actions/user/action-types';

describe(`User reducer work correctly`, () => {
  it(`User reducer should correctly set new status`, () => {
    expect(user({
      isAuthorizationRequired: false
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true,
    })).toEqual({
      isAuthorizationRequired: true,
    });
  });
});
