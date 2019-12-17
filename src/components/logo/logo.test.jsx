import React from 'react';
import renderer from 'react-test-renderer';
import Logo from '~/components/logo/logo';

jest.mock(`react-router-dom`, () => ({
  Link: `Link`
}));

describe(`Logo component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <Logo />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
