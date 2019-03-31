import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CounterButton from './CounterButton'

it('Test CounterButton', () => {
	const mockColor = 'red';
	expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('text increment button', () => {
	const mockColor = 'red';
	const wrapper = shallow(<CounterButton color={mockColor} />);

	wrapper.find('[id="counter"]').simulate('click')
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state().count).toEqual(3) // expect(wrapper.state()).toEqual({count:1})
	wrapper.find('[id="counter"]').simulate('click')
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({count: 5})
	expect(wrapper.props().color).toEqual('red')
})