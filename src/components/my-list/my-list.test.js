import React from 'react';
import renderer from 'react-test-renderer';
import {MyList} from '~/components/my-list/my-list';

jest.mock(`~/components/user-block/user-block`, () => `user-block`);
jest.mock(`~/components/movies-list/movies-list`, () => `movies-list`);
jest.mock(`react-router-dom`, () => ({
  Link: `Link`
}));

describe(`MyList component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <MyList />
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
