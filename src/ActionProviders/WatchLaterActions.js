import { WatchLaterContext } from '../contextCreator'

import { useContext } from 'react'

import { watchLaterReducer } from '../reducers/watchlaterReducer'

import { useReducer } from 'react'

import axios from 'axios'

const WatchLaterProvider = props => {
	const [{ watchLater, error: errorWatchLater }, dispatch] =
		useReducer(watchLaterReducer, {
			watchLater: [],
		})

	const config = {
		headers: {
			authorization: localStorage.getItem('userToken'),
		},
	}

	const removeWatchLater = data => {
		dispatch({
			type: 'REMOVE_FROM_WATCHLATER',
			payload: data,
		})
	}

	const addtoWatchLater = data => {
		dispatch({
			type: 'ADD_TO_WATCHLATER',
			payload: data,
		})
	}

	const errorMessage = error =>
		dispatch({
			type: 'TOGGLE_WATCHLATER_ERROR',
			payload: error,
		})

	const clearWatchLater = () => dispatch({ type: 'CLEAR_WATCHLATER' })

	const toggleWatchLater = async video => {
		const inWatchLater =
			watchLater.findIndex(x => x._id === video._id) === -1
				? false
				: true

		if (inWatchLater) {
			try {
				const res = await axios.delete(
					`/api/user/watchlater/${video._id}`,
					config
				)

				const data = await res.data.watchlater

				removeWatchLater(data)
			} catch (error) {
				errorMessage(error.message)
			}
		} else {
			try {
				const res = await axios.post(
					'/api/user/watchlater',
					{
						video,
					},
					config
				)

				const data = await res.data.watchlater

				addtoWatchLater(data)
			} catch (error) {
				errorMessage(error.message)
			}
		}
	}

	return (
		<WatchLaterContext.Provider
			value={{
				toggleWatchLater,
				watchLater,
				errorWatchLater,
				clearWatchLater,
				errorMessage,
				addtoWatchLater,
				removeWatchLater,
			}}>
			{props.children}
		</WatchLaterContext.Provider>
	)
}

const useWatchLater = () => useContext(WatchLaterContext)

export { WatchLaterProvider, useWatchLater }
