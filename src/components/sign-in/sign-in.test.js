import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from '~/components/sign-in/sign-in';

jest.mock(`~/components/logo/logo`, () => `logo`);

describe(`SignIn component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
        .create(
            <SignIn onFormSubmit={jest.fn()}/>
        ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
