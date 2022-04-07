export const historyReducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_HISTORY':
			return { history: action.payload }
		case 'CLEAR_HISTORY':
			return { history: [] }
		case 'TOGGLE_HISTORY_ERROR':
			return { error: action.payload }
		default:
			return state
	}
}
