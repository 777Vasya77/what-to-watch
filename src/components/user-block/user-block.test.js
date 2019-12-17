import React from 'react';
import renderer from 'react-test-renderer';
import {UserBlock} from "~/components/user-block/user-block";

jest.mock(`react-router-dom`, () => ({
  Link: `Link`
}));

describe(`UserBlock component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <UserBlock isAuth={true} authUser={({})}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
