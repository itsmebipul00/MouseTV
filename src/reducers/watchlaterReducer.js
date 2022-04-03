export const watchLaterReducer = (state, action) => {
	switch (action.type) {
		case 'LIKE_BTN_DISABLE':
			return { watchLater: [] }
		case 'ADD_TO_WATCHLATER':
			return { watchLater: action.payload }
		case 'REMOVE_FROM_WATCHLATER':
			return { watchLater: action.payload }
		case 'CLEAR_WATCHLATER':
			return { watchLater: [] }
		case 'TOGGLE_WATCHLATER_ERROR':
			return { error: action.payload }
		default:
			return state
	}
}
