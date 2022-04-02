import { UserContext } from '../contextCreator'
import { useReducer, useContext } from 'react'
import { userReducers } from '../reducers/authReducer'

const UserProvider = props => {
	const [{ userInfo, error: userAuthError }, dispatch] = useReducer(
		userReducers,
		{
			userInfo: {},
		}
	)

	const setAuthLoading = () => {
		dispatch({
			type: 'USER_AUTH_LOADING',
		})
	}

	const setUserAction = user => {
		console.log(user)
		dispatch({
			type: 'USER_AUTH_SUCCESS',
			payload: user,
		})
	}

	const setUserError = error => {
		dispatch({
			type: 'USER_AUTH_ERROR',
			payload: error,
		})
	}

	const logoutUser = () => {
		dispatch({
			type: 'LOGOUT_USER',
		})
		localStorage.removeItem('userToken')
	}

	return (
		<UserContext.Provider
			value={{
				setUserAction,
				userInfo,
				logoutUser,
				userAuthError,
				setUserError,
				setAuthLoading,
			}}>
			{props.children}
		</UserContext.Provider>
	)
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
