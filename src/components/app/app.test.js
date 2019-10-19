import React from 'react';
import renderer from 'react-test-renderer';
import App from '~/components/app/app';

const FILMS = [`film-1`, `film-2`, `film-3`, `film-4`];

it(`App component render correctly`, () => {
  const tree = renderer
    .create(<App filmsList={FILMS}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
