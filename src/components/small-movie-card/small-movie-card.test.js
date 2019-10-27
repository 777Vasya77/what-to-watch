import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from '~/components/small-movie-card/small-movie-card';
import {FILMS} from '~/moks/test-moks';
import Film from "~/models/film";

const FILM = new Film(FILMS[0]);

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
