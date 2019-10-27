import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from '~/components/movies-list/movies-list';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

it(`MoviesList component render correctly`, () => {
  const movies = Film.parseFilms(FILMS);
  const tree = renderer
    .create(
        <MoviesList filmsList={movies}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
