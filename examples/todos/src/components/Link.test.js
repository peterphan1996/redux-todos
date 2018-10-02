import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

const setup = setupProps => {
  const defaultProps = {
    active: false,
    onClick: jest.fn(),
    children: 'test',
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <Link active={props.active} onClick={props.onClick}>
      {props.children}
    </Link>
  );

  return {
    props,
    wrapper,
  };
};

describe('Link', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  test('renders a disabled button when active is true', () => {
    const { wrapper } = setup({ active: true });
    expect(wrapper.find('button').prop('disabled')).toEqual(true);

  });

  describe('when button is clicked', () => {
    test('should trigger click event correctly', () => {
      const { props, wrapper } = setup();
      expect(wrapper).toMatchSnapshot();

      const link = wrapper.find('button');
      link.simulate('click');

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
});