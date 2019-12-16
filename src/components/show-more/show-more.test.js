import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from '~/components/show-more/show-more';

describe(`ShowMore component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <ShowMore onShowMoreClick={jest.fn()}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
