import * as actions from './actions'
import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

 import configureMockStore from 'redux-mock-store';
 import thunkMiddleware from 'redux-thunk';

import fetchMock from 'fetch-mock'

 const mockStore = configureMockStore([thunkMiddleware]);


it('function setSearchField should return type and payload', () => {
	const text = 'woooo';
	const expectedAction = {
		payload: text,
		type: CHANGE_SEARCHFIELD
	}
	expect(actions.setSearchField(text))
	.toEqual(expectedAction)
})


it('handles request robots pending', ()=>{
	const store = mockStore();

	store.dispatch(actions.requestRobots())
	const action = store.getActions()

	const expectedAction = {
		type:REQUEST_ROBOTS_PENDING
	}
	expect(action[0]).toEqual(expectedAction)
})



it('handle get robots api success', ()=> {

    fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
      body: [{
        		email: "Sincere@april.biz",
				id: 1,
				name: "Leanne Graham",
				phone: "1-770-736-8031 x56442",
				username: "Bret"
			}],
      headers: { 'content-type': 'application/json' }
    })
	
	const expectedAction = 
		[
		{"type": "REQUEST_ROBOTS_PENDING"},
		{"payload": [{
			"email": "Sincere@april.biz", 
			"id": 1, "name": "Leanne Graham", 
			"phone": "1-770-736-8031 x56442", 
			"username": "Bret"}], 
			"type": "REQUEST_ROBOTS_SUCCESS"}]

	const store = mockStore({});

	return store.dispatch(actions.requestRobots())
	.then(()=>{
		console.log('storeaction', store.getActions())
		expect(store.getActions()).toEqual(expectedAction)
	})

})


