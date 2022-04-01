export const videoReducer = (state = { video: {} }, action) => {
	switch (action.type) {
		case 'GET_VIDEO_REQUEST':
			return { loading: true, video: {} }
		case 'VIDEO_SUCCESS':
			return { loading: false, video: action.payload }
		case 'VIDEO_ERROR':
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
