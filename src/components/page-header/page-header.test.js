import React from 'react';
import renderer from 'react-test-renderer';
import {PageHeader} from '~/components/page-header/page-header';

jest.mock(`react-router-dom`, () => ({
  Link: `Link`,
}));

describe(`PageHeader component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <PageHeader isAuth={false}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
