import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '~/components/main-page/main-page';

const FILMS = [`film-1`, `film-2`, `film-3`, `film-4`];

it(`MainPage component render correctly`, () => {
  const tree = renderer
    .create(<MainPage filmsList={FILMS}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
