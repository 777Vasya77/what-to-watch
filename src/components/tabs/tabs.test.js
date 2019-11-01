import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from '~/components/tabs/tabs';

describe(`Tabs component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <Tabs activeTabName={`Details`} filmId={1}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
