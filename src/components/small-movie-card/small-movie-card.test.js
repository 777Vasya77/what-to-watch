import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

const FILM = `film-1`;

it(`SmallMovieCard component render correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard film={FILM} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
