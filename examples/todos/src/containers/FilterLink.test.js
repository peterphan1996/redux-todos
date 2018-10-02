import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import FilterLink from './FilterLink';
import { setVisibilityFilter } from '../actions';

const setup = setupProps => {
  const store = configureStore()({});
  const defaultProps = {
    filter: "SHOW_ALL"
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <FilterLink filter={props.filter} store={store}>
      Show All
    </FilterLink>
  );

  return {
    store,
    wrapper,
  };
};

describe('FilterLink', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('sets the correct filter when clicked', () => {
    const { store, wrapper } = setup();
    expect(store.getActions()).toEqual([]);
    wrapper.find('Link').simulate('click');
    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ALL')]);
  });

  test('sets the correct filter when clicked SHOW_ACTIVE', () => {
    const { store, wrapper } = setup({filter: "SHOW_ACTIVE"});
    expect(store.getActions()).toEqual([]);
    wrapper.find('Link').simulate('click');
    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ACTIVE')]);
  });

  test('sets the correct filter when clicked SHOW_COMPLETED', () => {
    const { store, wrapper } = setup({filter: "SHOW_COMPLETED"});
    expect(store.getActions()).toEqual([]);
    wrapper.find('Link').simulate('click');
    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_COMPLETED')]);
  });
});