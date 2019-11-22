import React from 'react';
import {mount} from 'enzyme';
import SignIn from '~/components/sign-in/sign-in';

describe(`SingIn components e2e test`, () => {
  let wrapper;
  let handlerFormSubmit;

  beforeEach(() => {
    handlerFormSubmit = jest.fn();

    wrapper = mount(
        <SignIn
          onFormSubmit={handlerFormSubmit}
        />
    );

    const form = wrapper.find(`.sign-in__form`);
    form.simulate(`submit`, {
      preventDefault: () => {},
    });
  });

  it(`Component have one form`, () => {
    expect(wrapper.find(`form`)).toHaveLength(1);
  });

  it(`Check the onFormSubmit callback`, () => {
    expect(handlerFormSubmit).toBeCalledTimes(1);
  });

  it(`Check data in callback function`, () => {
    expect(handlerFormSubmit).toBeCalledWith({
      email: ``,
      password: ``,
    });
  });
});
