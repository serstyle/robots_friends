import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Card from './Card'

it('Test Card', () => {
	expect(shallow(<Card />)).toMatchSnapshot()
})