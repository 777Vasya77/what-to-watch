import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from "~/components/private-route/private-route";

jest.mock(`react-router-dom`, () => ({
  Route: `Route`
}));

describe(`PrivateRoute component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <PrivateRoute component={({})} isAuth={true}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
