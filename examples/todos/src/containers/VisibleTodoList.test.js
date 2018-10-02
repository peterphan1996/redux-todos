import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import VisibleTodoList from './VisibleTodoList';
import { toggleTodo, setVisibilityFilter } from '../actions';

const setup = () => {
  const store = configureStore()({
    todos: [
      {
        text: 'test1',
        completed: true,
        id: 0,
      },
      {
        text: 'test2',
        completed: false,
        id: 1,
      },
    ],
    visibilityFilter: 'SHOW_ALL',
  });
  const wrapper = shallow(<VisibleTodoList store={store} />);

  return {
    store,
    wrapper,
  };
};

describe('VisibleTodoList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('dispatch toggleTodo when a todo is clicked', () => {
    const { store, wrapper } = setup();
    // store.dispatch(setVisibilityFilter('SHOW_ALL'));
    wrapper.shallow().find('Todo').at(0).simulate('click')

    expect(store.getActions()).toEqual([toggleTodo(0)]);
  });

  test('shows active todos when SHOW_ACTIVE filter is active', () => {
    const { store } = setup();
    store.dispatch(setVisibilityFilter('SHOW_ACTIVE'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ACTIVE')]);
  });

  test('shows completed todos when SHOW_COMPLETED filter is active', () => {
    const { store } = setup();
    store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_COMPLETED')]);
  });

  test('shows completed todos when SHOW_ALL filter is active', () => {
    const { store } = setup();
    store.dispatch(setVisibilityFilter('SHOW_ALL'));

    expect(store.getActions()).toEqual([setVisibilityFilter('SHOW_ALL')]);
  });

});