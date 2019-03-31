import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {MainPage} from './MainPage'

let wrapper;

beforeEach(() =>{
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [
		{
			name:'John',
			id: 1,
			mail:'john@gmail.com'
		}
		],
		searchField: 'a',
		isPending: false
	}
	wrapper = shallow(<MainPage { ...mockProps} />)
})

it('Test snapshot MainPage', ()=>{
	expect(wrapper).toMatchSnapshot()
})

it('test filter robots', () =>{
	const mockProps2 = { // mock props only for this test
		onRequestRobots: jest.fn(),
		robots: [
		{
			name:'John',
			id: 2,
			mail:'john@gmail.com'
		}
		],
		searchField: 'ohn',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage { ...mockProps2} />)

	expect(wrapper.instance().filterRobots()).toEqual([]) //test with common mock

	expect(wrapper2.instance().filterRobots()).toEqual([{ //test with mock2
			name:'John',
			id: 2,
			mail:'john@gmail.com'
		}])
})


it('test filter robots 2', () =>{
	const mockProps3 = { // mock props only for this test
		onRequestRobots: jest.fn(),
		robots: [
		{
			name:'John',
			id: 2,
			mail:'john@gmail.com'
		}
		],
		searchField: 'a',
		isPending: false
	}
	const wrapper3 = shallow(<MainPage { ...mockProps3} />)

	const filteredRobot = [];

	expect(wrapper3.instance().filterRobots()).toEqual(filteredRobot)
})