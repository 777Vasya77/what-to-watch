import React from 'react';
import renderer from 'react-test-renderer';
import {MoviesList} from '~/components/movies-list/movies-list';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

const movies = Film.parseFilms(FILMS);

jest.mock(`react-router-dom`, () => ({
  Link: `Link`
}));

describe(`MoviesList component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
      .create(
          <MoviesList
            filmsList={movies}
            onChangeActiveItem={jest.fn()}
            loading={false}/>,
          {
            createNodeMock: () => ({
              load: () => ({})
            })
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

