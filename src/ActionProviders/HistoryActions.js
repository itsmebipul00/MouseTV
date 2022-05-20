import { useContext } from 'react'

import { historyReducer } from '../reducers/historyReducer'

import { HistoryContext } from '../contextCreator'

import { useReducer } from 'react'

import axios from 'axios'

import { useUser } from './AuthActions'

const HistoryProvider = props => {
	const [{ history, error: historyError }, dispatch] = useReducer(
		historyReducer,
		{
			history: [],
		}
	)
	const { userInfo } = useUser()

	const config = {
		headers: {
			authorization: userInfo?.encodedToken,
		},
	}

	const errorMessage = error =>
		dispatch({
			type: 'HISTORY_ERROR',
			payload: error,
		})

	const updateHistory = data => {
		dispatch({
			type: 'UPDATE_HISTORY',
			payload: data,
		})
	}

	const removeFromHistory = async id => {
		try {
			const res = await axios.delete(
				`/api/user/history/${id}`,
				config
			)

			const data = await res.data.history

			updateHistory(data)
		} catch (error) {
			errorMessage(error.message)
		}
	}

	const addToHistory = async video => {
		try {
			const res = await axios.post(
				'/api/user/history',
				{
					video,
				},
				config
			)

			const data = await res.data.history

			updateHistory(data)
		} catch (error) {
			errorMessage(error.message)
		}
	}

	const clearHistory = async () => {
		try {
			const res = await axios.delete('/api/user/history/all', config)

			const data = await res.data.history

			updateHistory(data)
		} catch (error) {
			errorMessage(error.message)
		}
	}

	return (
		<HistoryContext.Provider
			value={{
				clearHistory,
				addToHistory,
				removeFromHistory,
				historyError,
				history,
			}}>
			{props.children}
		</HistoryContext.Provider>
	)
}

const useHistroy = () => useContext(HistoryContext)

export { HistoryProvider, useHistroy }
