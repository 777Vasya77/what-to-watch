import {selectors} from '~/selectors/selectors';

describe(`User selectors work correctly`, () => {
  it(`getAuthorizationStatus work correctly`, () => {
    expect(selectors.user.getAuthorizationStatus({
      user: {
        isAuthorizationRequired: false
      }
    })).toEqual(false);
  });

  it(`getAuthUser work correctly`, () => {
    expect(selectors.user.getAuthUser({
      user: {
        auth: {name: `name`}
      }
    })).toEqual({name: `name`});
  });

  it(`isAuth return TRUE if auth not null`, () => {
    expect(selectors.user.isAuth({
      user: {
        auth: {name: `name`}
      }
    })).toEqual(true);
  });

  it(`isAuth return FALSE if auth is null`, () => {
    expect(selectors.user.isAuth({
      user: {
        auth: null
      }
    })).toEqual(false);
  });
});
