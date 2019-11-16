import MockAdapter from 'axios-mock-adapter';
import createApi from '~/api/api';
import {operations} from '~/operations/oparations';
import {LOAD_FILMS} from "~/actions/films/action-types";
import Film from '~/models/film';

describe(`Films operations tests`, () => {
  it(`Should make a correctly API call to /films`, () => {
    jest.mock(`~/models/film`, () => () => ({
      parseFilms: (data) => data
    }));

    const api = createApi();

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFilms = operations.films.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{films: true}]);

    return loadFilms(dispatch, ``, api)
      .then(() => {
        expect(dispatch).toBeCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: LOAD_FILMS,
          payload: Film.parseFilms([{films: true}])
        });
      });
  });
});
