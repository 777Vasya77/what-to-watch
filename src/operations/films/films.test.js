import MockAdapter from 'axios-mock-adapter';
import createApi from '~/api/api';
import {operations} from '~/operations/oparations';
import ActionType from '~/actions/films/action-types';
import Film from '~/models/film';

describe(`Films operations tests`, () => {
  it(`Should make a correctly API call to /films`, () => {
    jest.mock(`~/models/film`, () => () => ({
      parseFilms: (data) => data
    }));

    const dispatch = jest.fn();
    const api = createApi(dispatch);
    const apiMock = new MockAdapter(api);
    const loadFilms = operations.films.loadFilms();

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
});
