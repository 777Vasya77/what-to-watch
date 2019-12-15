import React from 'react';
import {shallow} from 'enzyme';
import ShowMore from '~/components/show-more/show-more';

const LOADED_COUNT = 20;

describe(`SingIn components e2e test`, () => {
  let wrapper;
  let handlerClick;

  beforeEach(() => {
    handlerClick = jest.fn();

    wrapper = shallow(
        <ShowMore
          onShowMoreClick={handlerClick}
        />
    );

    const button = wrapper.find(`.catalog__button`);
    button.simulate(`click`, {
      preventDefault: () => {},
    });
  });

  it(`Check the onShowMoreClick callback`, () => {
    expect(handlerClick).toBeCalledTimes(1);
  });

  it(`Check data in callback function`, () => {
    expect(handlerClick).toBeCalledWith(LOADED_COUNT);
  });
});
