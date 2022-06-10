export const playListReducer = (state = { playList: [] }, action) => {
	switch (action.type) {
		case 'POST_VIDEO_TO_PLAYLIST':
			const existPlayList = state?.playList?.find(
				pL => pL._id === action.payload._id
			)
			if (existPlayList) {
				if (state?.playList?.length === 1) {
					return {
						playList: [action.payload],
					}
				} else {
					return {
						playList: state?.playList?.map(pL =>
							pL._id === existPlayList?._id ? action.payload : pL
						),
					}
				}
			} else {
				return {
					playList: [...state?.playList, action.payload],
				}
			}
		case 'DELETE_VIDEO_FROM_PLAYLIST':
			return {
				...state,
				playList: state?.playList?.map(pL =>
					pL._id === action.payload._id ? action.payload : pL
				),
			}
		case 'DELETE_PLAYLIST':
			return {
				playList: action.payload,
			}
		case 'PLAYLIST_ERROR':
			return { error: action.payload }
		default:
			return state
	}
}
