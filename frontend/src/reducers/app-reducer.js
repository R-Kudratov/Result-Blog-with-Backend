import { ACTION_TYPES } from '../actions'

const initialAppState = {
	modal: {
		isOpen: false,
		text: null,
		onConfirm: null,
		onCancel: null,
	},
}

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case ACTION_TYPES.OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload,
					isOpen: true,
				},
			}
		case ACTION_TYPES.CLOSE_MODAL:
			return initialAppState
		default:
			return state
	}
}
