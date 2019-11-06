import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '~/components/app/app';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';
import {Provider} from "react-redux";

const createFakeStore = (state) => ({
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => (Object.assign({}, state))
});

it(`App component render correctly`, () => {
  const store = createFakeStore({
    films: {
      genres: [],
      activeGenreFilter: ``
    }
  });
  const movies = Film.parseFilms(FILMS);
  const tree = renderer
    .create(
        <Provider store={store}>
          <App filmsList={movies} />
        </Provider>,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
