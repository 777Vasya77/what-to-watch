import React from 'react';
import {shallow} from 'enzyme';
import Tabs from '~/components/tabs/tabs';

describe(`Tabs component e2e test`, () => {
  let wrapper;
  let handleTabChange;
  let link;
  beforeEach(() => {
    handleTabChange = jest.fn();
    wrapper = shallow(
        <Tabs
          activeTabName={`details`}
          onTabChange={handleTabChange}
        />
    );

    link = wrapper.find(`.movie-nav__link`).first();
    link.simulate(`click`, {
      target: {
        dataset: {tabName: `overview`}
      }
    });
  });

  it(`Component have link`, () => {
    expect(link).toHaveLength(1);
  });

  it(`Check callback function called`, () => {
    expect(handleTabChange).toBeCalledTimes(1);
  });

  it(`Check callback function called with data`, () => {
    expect(handleTabChange).toBeCalledWith(`overview`);
  });
});
