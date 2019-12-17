import React from 'react';
import renderer from 'react-test-renderer';
import PageFooter from '~/components/page-footer/page-footer';

jest.mock(`react-router-dom`, () => ({
  Link: `Link`,
}));

describe(`PageFooter component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
      .create(
          <PageFooter />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
