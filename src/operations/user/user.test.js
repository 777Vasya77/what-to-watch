import MockAdapter from 'axios-mock-adapter';
import createApi from '~/api/api';
import {operations} from '~/operations/oparations';
import ActionType from '~/actions/user/action-types';
import User from '~/models/user';

jest.mock(`~/models/user`, () => ({
  parseUser: (data) => data
}));

describe(`Films operations tests`, () => {
  let api;
  let dispatch;
  let apiMock;
  let login;

  beforeEach(() => {
    dispatch = jest.fn();
    api = createApi(dispatch);
    apiMock = new MockAdapter(api);
    login = operations.user.login([{user: {}}]);
  });

  it(`Should make a correctly API call to /login`, () => {
    apiMock
      .onPost(`/login`)
      .reply(200, {user: `user`});

    return login(dispatch, null, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTH,
          payload: {user: `user`}
        });
      });
  });

  it(`Should make a not correctly API call to /login`, () => {
    apiMock
      .onPost(`/login`)
      .reply(401, {});

    return login(dispatch, null, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(0);
      });
  });
});

