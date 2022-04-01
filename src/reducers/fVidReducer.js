export const fVidReducer = (state, action) => {
	switch (action.type) {
		case 'VIDEOS_FILTER_DATA':
			return { filteredVideos: action.payload }
		default:
			return state
	}
}
