import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '~/components/app/app';

jest.mock(`~/components/main-page/main-page`, () => `main-page`);

it(`App component render correctly`, () => {
  const tree = renderer
    .create(
        <App />,
        {createNodeMock: () => ({})}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
