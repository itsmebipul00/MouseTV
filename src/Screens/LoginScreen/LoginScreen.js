import './LoginScreen.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useUser } from '../../ActionProviders/AuthActions'

import { Header } from '../../Components/Header/Header'

import axios from 'axios'
import { Loader } from '../../Components/Loader/Loader'
import { Error } from '../../Components/Error/Error'

export const LoginScreen = () => {
	const navigate = useNavigate()
	const [loginFormData, setLoginFormData] = useState({
		email: '',
		password: '',
	})

	const location = useLocation()

	const {
		setAuthLoading,
		setUserAction,
		setUserError,
		authLoading,
		userAuthError,
	} = useUser()

	const handleRegisterSubmit = async e => {
		e.preventDefault()
		try {
			setAuthLoading()
			const resLogin = await axios.post('/api/auth/login', {
				email: loginFormData.email,
				password: loginFormData.password,
			})
			const dataLogin = await resLogin.data
			localStorage.setItem('userToken', dataLogin.encodedToken)
			setTimeout(() => setUserAction(dataLogin), 1000)
			navigate(-1)
		} catch (error) {
			setUserError(error.message)
		}
	}

	const handleChange = event => {
		event.preventDefault()
		const { name, value, type, checked } = event.target
		setLoginFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	useEffect(() => {
		const userToken = localStorage.getItem('userToken')
		if (userToken) {
			navigate(-1)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Will do later
	const handleGuestLogin = e => {
		console.log(e)
	}

	return (
		<>
			{authLoading && <Loader />}
			{userAuthError && <Error error={userAuthError} />}
			<Header />
			<form
				className='form-login fs-400 letter-spacing-3'
				onSubmit={handleRegisterSubmit}>
				<label htmlFor='email' className='email'>
					Email<span className='text-red'>*</span>
				</label>
				<input
					id='email'
					className='form-email'
					type='email'
					name='email'
					onChange={handleChange}
					value={loginFormData.email}
					required
				/>

				<label htmlFor='password' className='password'>
					Password<span className='text-red'>*</span>
					<span
						className='form__tooltip'
						data-tooltip='Minimum 8 characters'></span>
				</label>

				<div className='p-relative'>
					<input
						id='password'
						className='form-password'
						type='password'
						minLength='8'
						name='password'
						onChange={handleChange}
						value={loginFormData.password}
						required
					/>
					<i className='fas fa-eye p-absolute'></i>
				</div>

				<div className='d-flex fs-400'>
					<span>
						<input
							type='checkbox'
							id='rememberMe'
							name='rememberMe'
							className='rememberMe'
							checked={loginFormData.remeberMe}
						/>
						<label htmlFor='rememberMe'>Remember me</label>
					</span>

					<Link
						to='#'
						className='forgot-password link'
						state={{ form: location.pathname }}>
						Forgot Password ?
					</Link>
				</div>

				<button className='btn btn-signUp uppercase letter-spacing-1'>
					Login
				</button>
				<p className='already-done'>
					Yet to Register?{' '}
					<Link
						to='/register'
						state={{ form: location.pathname }}
						className='link'>
						Register
					</Link>
				</p>
				<button
					className='btn-handle-guest'
					onClick={handleGuestLogin}>
					Use Guest Credentials
				</button>
			</form>
		</>
	)
}
