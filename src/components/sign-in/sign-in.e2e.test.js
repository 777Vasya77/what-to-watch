import React from 'react';
import {shallow} from "enzyme";
import SignIn from "~/components/sign-in/sign-in";

describe(``, () => {
  let wrapper;
  let handlerFormSubmit;

  beforeEach(() => {
    handlerFormSubmit = jest.fn();

    wrapper = shallow(
        <SignIn
          onFormSubmit={handlerFormSubmit}
        />
    );

    const form = wrapper.find(`form`);
    form.simulate(`submit`, {
      name: `name`,
      email: `email`
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
      name: `name`,
      email: `email`
    });
  });
});
