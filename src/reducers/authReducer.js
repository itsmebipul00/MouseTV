export const userReducers = (state = { userInfo: {} }, action) => {
	switch (action.type) {
		case 'USER_AUTH_LOADING':
			return {
				laoding: true,
				userInfo: {},
			}
		case 'USER_AUTH_SUCCESS':
			return {
				laoding: false,
				userInfo: action.payload,
			}
		case 'USER_AUTH_ERROR':
			return {
				loading: false,
				error: action.payload,
			}
		case 'LOGOUT_USER':
			return {
				userInfo: {},
			}
		default:
			return state
	}
}
