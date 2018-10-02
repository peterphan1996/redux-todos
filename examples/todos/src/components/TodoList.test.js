import React from 'react';
import { shallow } from 'enzyme';

import TodoList from './TodoList';

const setup = setupProps => {
  const defaultProps = {
    todos: [],
    onTodoClick: jest.fn(),
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(<TodoList todos={props.todos} toggleTodo={props.onTodoClick} />);

  return {
    props,
    wrapper,
  };
};

describe('TodoList', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('with todos', () => {
    const { wrapper, props } = setup({
      todos: [
        {
          text: 'Codelink',
          completed: false,
          id: 0,
        },
        {
          text: 'Nhat',
          completed: true,
          id: 0,
        },
      ],
    });

    test('renders a list of todos', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('calls onTodoClick when its todo children clicked', () => {
      wrapper
        .find('Todo')
        .at(0)
        .simulate('click');
      expect(props.onTodoClick).toHaveBeenCalledTimes(1);
    });
  });
})