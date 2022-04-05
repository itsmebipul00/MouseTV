import axios from 'axios'
import { useContext, useReducer } from 'react'
import { PlayListContext } from '../contextCreator'
import { playListReducer } from '../reducers/playListReducer.js'

const PlayListProvider = props => {
	const config = {
		headers: {
			authorization: localStorage.getItem('userToken'),
		},
	}

	const [{ error: errorPlayList, playList }, dispatch] = useReducer(
		playListReducer,
		{ playList: [] }
	)

	const postVideoToPlaylist = data => {
		dispatch({
			type: 'POST_VIDEO_TO_PLAYLIST',
			payload: data,
		})
	}

	const playListError = data => {
		dispatch({
			type: 'PLAYLIST_ERROR',
			payload: data,
		})
	}

	const createPlaylist = async (newPlaylist, video) => {
		console.log(newPlaylist, video)
		try {
			const res = await axios.post(
				'/api/user/playlists',
				{ playlist: { title: newPlaylist } },
				config
			)

			console.log(res)

			const playLists = res.data.playlists

			console.log(playLists[playLists.length - 1]._id, video)

			try {
				const response = await axios.post(
					`api/user/playlists/${playLists[playLists.length - 1]._id}`,
					{ video },
					config
				)

				console.log(response)

				postVideoToPlaylist(response.data.playlist)
			} catch (error) {
				playListError(error.message)
				console.log(error.message)
			}
		} catch (error) {
			playListError(error.message)
		}
	}

	const addVideoToPlaylist = async (id, video) => {
		try {
			console.log(id, video)
			const res = await axios.post(
				`api/user/playlists/${id}`,
				{ video },
				config
			)

			console.log(playList, res)

			postVideoToPlaylist(res.data.playlist)
		} catch (error) {
			console.log(error)
			playListError(error.message)
		}
	}

	return (
		<PlayListContext.Provider
			value={{
				createPlaylist,
				playList,
				errorPlayList,
				addVideoToPlaylist,
			}}>
			{props.children}
		</PlayListContext.Provider>
	)
}

const usePlayList = () => useContext(PlayListContext)

export { PlayListProvider, usePlayList }
