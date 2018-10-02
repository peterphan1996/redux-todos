import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';

const setup = setupProps => {
  const defaultProps = {
    text: 'test',
    completed: false,
    onClick: jest.fn(),
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <Todo text={props.text} completed={props.completed} onClick={props.onClick} />
  );

  return {
    props,
    wrapper,
  };
};

describe('Todo', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('have a line-through when prop passed completed', () => {
    const { wrapper } = setup({ completed: true });

    expect(wrapper.find('li').prop('style')).toEqual({
      textDecoration: 'line-through'
    });
  });

  test('calls onClick once when clicked', () => {
    const { props, wrapper } = setup();
    wrapper.find('li').simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});