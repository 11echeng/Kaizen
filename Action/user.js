import apiHelper from '../utils/apiHelper'
import * as types from '../types/user.js'

export const getUserSuccess = user => ({ type: types.LOAD_USER_SUCCESS, user })

export const updateUserSuccess = user => ({ type: types.UPDATE_USER_SUCCESS, user })

export const getUser = () => async dispatch => {
	try {
		const {
			data: [userData]
		} = await apiHelper('GET', '/api/get-customer')
		dispatch(loadUser(userData))
	} catch (e) {
		throw e
	}
}

export const updateUser = () => async dispatch => {
	try {
		const {
			data: [userData]
		} = await apiHelper('POST', '/api/get-customer')
		dispatch(updateUser(userData))
	} catch (e) {
		throw e
	}
}
