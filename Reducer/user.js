import * as types from '../types/user'
import initialState from './initialState'

export default (state = initialState.user, action = {}) => {
	switch (action.type) {
		case types.LOAD_USER_SUCCESS:
			return {
				...state,
				...action.user
			}
		case types.UPDATE_USER_SUCCESS:
			return {
				...state,
				...action.user
			}
		default:
			return state
	}
}
