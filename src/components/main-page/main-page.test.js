import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from '~/components/main-page/main-page';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

jest.mock(`~/components/genres-list/genres-list`, () => `genres-list`);
jest.mock(`~/components/movies-list/movies-list`, () => `movies-list`);
jest.mock(`~/components/page-header/page-header`, () => `page-header`);
jest.mock(`~/components/movie-card-hero/movie-card-hero`, () => `movie-card-hero`);
jest.mock(`react-router-dom`, () => ({
  Link: `Link`
}));

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
          onShowMoreClick={jest.fn()}
          isAllFilmsLoaded={true}
          promoFilm={movies[0]}/>,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
