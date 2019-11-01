import React from 'react';
import renderer from 'react-test-renderer';
import MoviePageDetails from '~/components/movie-page-details/movie-page-details';
import Film from '~/models/film';
import {FILMS} from '~/moks/test-moks';

const film = new Film(FILMS[0]);
const similarFilms = Film.parseFilms(FILMS).slice(4);

describe(`MoviePageReviews component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <MoviePageDetails
              film={film}
              similarFilms={similarFilms}
            />,
            {createNodeMock: () => ({})}
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});


