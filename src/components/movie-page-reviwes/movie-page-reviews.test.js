import React from 'react';
import renderer from 'react-test-renderer';
import Film from '~/models/film';
import Comment from '~/models/comment';
import {COMMENTS, FILMS} from '~/moks/test-moks';
import MoviePageReviews from '~/components/movie-page-reviwes/movie-page-reviews';

const film = new Film(FILMS[0]);
const similarFilms = Film.parseFilms(FILMS).slice(4);
const comments = Comment.parseComments(COMMENTS);

describe(`MoviePageReviews component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
      .create(
          <MoviePageReviews
            film={film}
            similarFilms={similarFilms}
            comments={comments}
          />,
          {createNodeMock: () => ({})}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
