import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs';

jest.mock(`react-router-dom`, () => ({
  Link: `Link`
}));

describe(`Breadcrumbs component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <Breadcrumbs filmId={1} title={`test`}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
