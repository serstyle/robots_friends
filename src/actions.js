import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

const requestRobotsPending = () =>{
	return{type: REQUEST_ROBOTS_PENDING}
}

const requestRobotsFailed = (err) =>{
	return{
		type: REQUEST_ROBOTS_FAILED,
		payload: err
	}
}

const requestRobotsSuccess = (payload) =>{
	return{
		type: REQUEST_ROBOTS_SUCCESS,
		payload
	}
}

export const requestRobots = () => (dispatch) => {
  dispatch(requestRobotsPending())
  return apiCall('https://jsonplaceholder.typicode.com/users')
    .then(payload =>{console.log(payload) 
    	dispatch(requestRobotsSuccess(payload))})
    .catch(error => dispatch(requestRobotsFailed(error)))
}