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

  it(`User reducer should correctly set new myFilmListLoading status`, () => {
    expect(user({
      myFilmListLoading: false
    }, {
      type: ActionType.SET_MY_FILM_LIST_LOADING,
      payload: true,
    })).toEqual({
      myFilmListLoading: true,
    });
  });

  it(`User reducer should correctly add new film to my list`, () => {
    expect(user({
      myFilmList: []
    }, {
      type: ActionType.ADD_FILM,
      payload: [{film: 1}],
    })).toEqual({
      myFilmList: [{film: 1}],
    });
  });

  it(`User reducer should correctly remove film from my list`, () => {
    expect(user({
      myFilmList: [{id: 1}, {id: 2}, {id: 3}]
    }, {
      type: ActionType.REMOVE_FILM,
      payload: {id: 1},
    })).toEqual({
      myFilmList: [{id: 2}, {id: 3}],
    });
  });
});
