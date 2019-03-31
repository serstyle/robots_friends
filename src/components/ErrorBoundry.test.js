import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ErrorBoundry from './ErrorBoundry'

const wrapper = shallow( <ErrorBoundry > </ErrorBoundry> );

it('Test ErrorBoundry', () => {
	expect(wrapper).toMatchSnapshot()
})


it('TEST somethingWentWrong function true', ()=> {

	expect(wrapper.instance().somethingWentWrong(true)).toEqual(<h1>Something went wrong.</h1>)
})



it('TEST somethingWentWrong function false', ()=> {
	const children = '<Something />'
	expect(wrapper.instance().somethingWentWrong(false, children)).toEqual('<Something />')
})

it('test error', ()=> {
	wrapper.instance().componentDidCatch()
	expect(wrapper.state().hasError).toEqual(true)
})

