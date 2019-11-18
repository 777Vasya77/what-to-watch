import MockAdapter from 'axios-mock-adapter';
import createApi from '~/api/api';
import {operations} from '~/operations/oparations';
import ActionType from '~/actions/films/action-types';
import Film from '~/models/film';

jest.mock(`~/models/film`, () => ({
  parseFilms: (data) => data
}));

describe(`Films operations tests`, () => {
  let api;
  let dispatch;
  let apiMock;
  let loadFilms;

  beforeEach(() => {
    dispatch = jest.fn();
    api = createApi(dispatch);
    apiMock = new MockAdapter(api);
    loadFilms = operations.films.loadFilms();
  });

  it(`Should make a correctly API call to /films`, () => {
    apiMock
      .onGet(`/films`)
      .reply(200, [{films: true}]);

    return loadFilms(dispatch, null, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_FILMS,
          payload: Film.parseFilms([{films: true}])
        });
      });
  });

  it(`Should make a not correctly API call to /films`, () => {
    apiMock
      .onGet(`/films`)
      .reply(404, {
        message: `Not found`,
        status: true
      });

    return loadFilms(dispatch, null, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_ERROR,
          payload: {
            error: {
              message: `Not found`,
              status: true
            }}
        });
      });
  });
});
