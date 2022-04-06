export const likesReducer = (state, action) => {
	switch (action.type) {
		case 'LIKE_BTN_DISABLE':
			return { likeBtnDisabled: true, likes: [] }
		case 'ADD_TO_LIKES':
			return { likeBtnDisabled: false, likes: action.payload }
		case 'REMOVE_FROM_LIKES':
			return { likeBtnDisabled: false, likes: action.payload }
		case 'TOGGLE_LIKES_ERROR':
			return { likeBtnDisabled: false, error: action.payload }
		default:
			return state
	}
}
