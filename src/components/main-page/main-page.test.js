import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from '~/components/main-page/main-page';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = {
  films: {
    filmsList: [],
    activeGenreFilter: ``
  }
};

const reducer = (state = initialState) => state;

it(`MainPage component render correctly`, () => {
  const genres = [`1`, `2`];
  const movies = Film.parseFilms(FILMS);
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <MainPage
            filmsList={movies}
            activeGenreFilter={genres[0]}
            genres={genres}
            onGenreLinkClick={jest.fn()}
            onShowMoreClick={jest.fn()}
            isAllFilmsLoaded={true}
          />
        </Provider>,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
