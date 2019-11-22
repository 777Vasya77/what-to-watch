import React from 'react';
import renderer from 'react-test-renderer';
import Film from '~/models/film';
import {FILMS} from '~/moks/test-moks';
import MovieCardHero from '~/components/movie-card-hero/movie-card-hero';

jest.mock(`~/components/page-header/page-header`, () => `page-header`);
const film = new Film(FILMS[0]);

describe(`MovieCardHero component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer.create(
        <MovieCardHero film={film} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
