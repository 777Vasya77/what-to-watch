import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from "~/components/movie-page/movie-page";
import Film from '~/models/film';
import {FILMS} from '~/moks/test-moks';

const film = new Film(FILMS[0]);

describe(`MoviePage component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer.create(
        <MoviePage
          film={film}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
