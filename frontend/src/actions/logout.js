import { ACTION_TYPES } from './action-types'
import { request } from '../utils'

export const logout = () => {
	request('/logout', 'POST')

	return {
		type: ACTION_TYPES.LOGOUT,
	}
}
