import React from 'react';
import renderer from 'react-test-renderer';
import App from '~/components/app/app';
import {FILMS} from '~/moks/test-moks';
import Film from '~/models/film';

it(`App component render correctly`, () => {
  const movies = Film.parseFilms(FILMS);
  const tree = renderer
    .create(<App filmsList={movies}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
