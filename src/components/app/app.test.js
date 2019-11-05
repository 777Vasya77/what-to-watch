import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '~/components/app/app';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

it(`App component render correctly`, () => {
  const movies = Film.parseFilms(FILMS);
  const genres = [`1`, `2`];
  const tree = renderer
    .create(
        <App
          filmsList={movies}
          activeGenreFilter={genres[0]}
          genres={genres}
          onGenreLinkClick={jest.fn()}
        />,
        {createNodeMock: () => ({})}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
