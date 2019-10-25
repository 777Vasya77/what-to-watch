import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';

const FILM = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`SmallMovieCard component render correctly`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          film={FILM}
          onCardLinkMouseEnter={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
