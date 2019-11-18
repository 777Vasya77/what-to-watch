import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '~/components/loader/loader';

describe(`Loader component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <Loader />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
