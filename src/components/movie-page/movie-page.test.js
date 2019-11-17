import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from '~/components/movie-page/movie-page';
import Film from '~/models/film';
import {COMMENTS, FILMS} from '~/moks/test-moks';
import Comment from '~/models/comment';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const film = new Film(FILMS[0]);
const similarFilms = Film.parseFilms(FILMS).slice(4);
const comments = Comment.parseComments(COMMENTS);
const initialState = {
  films: {
    filmsList: [],
    activeGenreFilter: ``
  }
};

const reducer = (state = initialState) => state;

describe(`MoviePage component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer.create(
        <Provider store={createStore(reducer)}>
          <MoviePage
            film={film}
            similarFilms={similarFilms}
            comments={comments}
            onChangeActiveItem={jest.fn()}
          />
        </Provider>,
        {createNodeMock: () => ({})}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
