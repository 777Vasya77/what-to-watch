import React from 'react';
import withActiveItem from '~/hocs/with-active-item/with-active-item';
import {mount} from 'enzyme';

describe(`withActiveItemHoc component e2e tests`, () => {
  let wrapper;

  beforeEach(() => {
    const MockComponent = () => <div />;
    const MockComponentWrapped = withActiveItem(MockComponent);

    wrapper = mount(<MockComponentWrapped />);
  });

  it(`By default activeItem equal null`, () => {
    expect(wrapper.state().activeItem).toEqual(null);
  });

  it(`After triggered _handleChangeActiveItem activeItem value changed`, () => {
    wrapper.instance()._handleChangeActiveItem({activeItem: `activeItem`});
    expect(wrapper.state().activeItem).toEqual({activeItem: `activeItem`});
  });
});
