import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CardList from './CardList'

it('Test cardlist', () => {
	const mockRobot = [{
		name: 'John',
		email: 'john@gmail.com',
		id: 1
	}]
	expect(shallow(<CardList robots={mockRobot} />)).toMatchSnapshot()
})