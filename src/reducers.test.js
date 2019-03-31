import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';

 import * as reducers from './reducers'

 describe('searchRobots', ()=> {
 	const initialStateSearch = {
  		searchField: ''
	}
 	it('should return the initialState', () => {
 		expect(reducers.searchRobots(undefined /*nostate=undefined*/, {/*action*/}))
 		.toEqual({searchField: ''})
 	})
 	it('test CHANGE_SEARCHFIELD', () => {
 		expect(reducers.searchRobots(initialStateSearch, { //action here
 			type: CHANGE_SEARCHFIELD,
 			payload: 'abc'
 		})).toEqual({searchField:'abc'})
 	})
 })


 describe('requestRobots', () => {
	 const initialStateRobots = {
	  robots: [],
	  isPending: false
	}
 	it('should return the initialStateRobots', () => {
 		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
 	})
 	it('REQUEST_ROBOTS_PENDING', ()=>{
 		expect(reducers.requestRobots(initialStateRobots, { //action here
 			type: REQUEST_ROBOTS_PENDING,
 		}))
 		.toEqual({
  			robots: [],
  			isPending: true
		})
 	})
 	it('handle REQUEST_ROBOTS_SUCCES action', ()=>{
 		expect(reducers.requestRobots(initialStateRobots, { //action here
 			type: REQUEST_ROBOTS_SUCCESS,
 			payload: [{
 				id:'123',
 				name:'test',
 				email:'test@gmail.com'
 			}]
 		}))
 		.toEqual({
  			robots: [{
 				id:'123',
 				name:'test',
 				email:'test@gmail.com'
 			}],
  			isPending: false
		})
 	})
 	it('REQUEST_ROBOTS_FAILED', ()=>{
 		expect(reducers.requestRobots(initialStateRobots, { //action here
 			type: REQUEST_ROBOTS_FAILED,
 			payload: 'error'
 		}))
 		.toEqual({
  			robots: [],
  			isPending: false,
  			error: 'error'
		})
 	})
 })