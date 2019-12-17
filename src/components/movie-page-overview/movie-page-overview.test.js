import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageOverview from '~/components/movie-page-overview/movie-page-overview';
import Film from '~/models/film';
import {FILMS} from '~/moks/test-moks';

const film = new Film(FILMS[0]);

describe(`MoviePageOverview component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <MoviePageOverview film={film}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
