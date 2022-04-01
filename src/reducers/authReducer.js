export const userReducers = (state = { userInfo: {} }, action) => {
	switch (action.type) {
		case 'USER_AUTH_SUCCESS':
			return {
				userInfo: action.payload,
			}
		case 'USER_AUTH_ERROR':
			return {
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
