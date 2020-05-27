import React from 'react';
import { mount } from 'enzyme';
import createLink from '../../src/react/createLink';

describe('createLink', () => {
  it('should render', () => {
    const Link = createLink({
      push: jest.fn(),
    });

    const wrapper = mount(<Link to="/home">Test Link</Link>);

    expect(wrapper.text()).toEqual('Test Link');
  });

  it('should fire history.push on click', () => {
    const history = {
      push: jest.fn(),
    };
    const Link = createLink(history);

    const wrapper = mount(<Link to="/home">Test Link</Link>);

    expect(wrapper.text()).toEqual('Test Link');

    wrapper.simulate('click');

    expect(history.push).toHaveBeenCalledWith('/home');
  });
});
