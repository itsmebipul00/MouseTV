export const videosReducer = (state = { videos: [] }, action) => {
	switch (action.type) {
		case 'VIDEOS_LOADING_TRUE':
			return { loading: true, videos: [] }
		case 'VIDEOS_SUCCESS':
			console.log(state)
			return { loading: false, videos: action.payload }
		case 'VIDEOS_ERROR':
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
