import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '~/components/main-page/main-page';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

it(`MainPage component render correctly`, () => {
  const genres = [`1`, `2`];
  const movies = Film.parseFilms(FILMS);
  const tree = renderer
    .create(
        <MainPage
          filmsList={movies}
          activeGenreFilter={genres[0]}
          genres={genres}
          onGenreLinkClick={jest.fn()}
        />,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
