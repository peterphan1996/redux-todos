import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import AddTodo from './AddTodo';

const setup = () => {
  const store = configureStore()();
  const wrapper = shallow(<AddTodo store={store} />);

  return {
    store,
    wrapper,
  };
};

describe('<AddTodo/>', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    const { wrapper } = setup();
    const deeperWrapper = wrapper.shallow();

    expect(deeperWrapper.state().value).toBe('');
    deeperWrapper.find('input').simulate('change', { currentTarget: { value: 'test' } });

    test('should update value in state correctly', () => {
      expect(deeperWrapper.state().value).toBe('test');
    });
  });

  describe('handleSubmit', () => {
    test('should calls preventDefault to stop the form from submiting', () => {
      const preventDefault = jest.fn();
      const { wrapper } = setup();
      const form = wrapper
        .shallow()
        .find('form');
      form.simulate('submit', { preventDefault });
      expect(preventDefault).toHaveBeenCalledTimes(1);
    });

    describe('when value is empty', () => {
      test('should not do anything', () => {
        const { store, wrapper } = setup();
        const deeperWrapper = wrapper.shallow();
        const preventDefault = jest.fn();
        deeperWrapper.find('form').simulate('submit', { preventDefault });
        expect(store.getActions()).toEqual([]);
      });
    });

    describe('when value is present', () => {
      test('should dispatch addTodo action with correct value and reset value in state', () => {
        const { store, wrapper } = setup();
        const preventDefault = jest.fn();
        const deeperWrapper = wrapper.shallow();

        deeperWrapper.find('input').simulate('change', { currentTarget: { value: 'Codelink' }, preventDefault });
        deeperWrapper.find('form').simulate('submit', { preventDefault });

        expect(preventDefault).toHaveBeenCalledTimes(1);
        expect(store.getActions()).toEqual([{ id: 0, text: 'Codelink', type: 'ADD_TODO' }]);
        expect(deeperWrapper.state().value).toEqual('');
      });
    });
  });
});