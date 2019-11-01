import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from '~/components/movie-page/movie-page';
import Film from '~/models/film';
import {COMMENTS, FILMS} from '~/moks/test-moks';
import Comment from '~/models/comment';

const film = new Film(FILMS[0]);
const similarFilms = Film.parseFilms(FILMS).slice(4);
const comments = Comment.parseComments(COMMENTS);

describe(`MoviePage component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer.create(
        <MoviePage
          film={film}
          similarFilms={similarFilms}
          comments={comments}
        />,
        {createNodeMock: () => ({})}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
