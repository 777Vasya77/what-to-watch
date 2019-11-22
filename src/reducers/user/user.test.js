import user from '~/reducers/user/user';
import ActionType from '~/actions/user/action-types';

describe(`User reducer work correctly`, () => {
  it(`User reducer should correctly set new isAuthorizationRequired status`, () => {
    expect(user({
      isAuthorizationRequired: false
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true,
    })).toEqual({
      isAuthorizationRequired: true,
    });
  });

  it(`User reducer should correctly set auth user`, () => {
    expect(user({
      auth: {
        name: `name`,
        email: `email`
      }
    }, {
      type: ActionType.SET_AUTH,
      payload: {
        name: `name`,
        email: `email`
      },
    })).toEqual({
      auth: {
        name: `name`,
        email: `email`
      },
    });
  });
});
