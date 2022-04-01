import './RegisterScreen.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { useUser } from '../../ActionProviders/AuthActions'

import { Header } from '../../Components/Header/Header'

export const RegisterScreen = () => {
	const location = useLocation()

	const [registerFromData, setRegisterFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const [message, setMessage] = useState('')

	const navigate = useNavigate()

	const { setAuthLoading, setUserAction, setUserError } = useUser()

	const handleLoginSubmit = async event => {
		event.preventDefault()
		if (
			registerFromData.password !== registerFromData.confirmPassword
		) {
			setMessage('Passwords do not match')
		} else {
			setMessage('')
			try {
				setAuthLoading()
				const resRegister = await axios.post('/api/auth/signup', {
					username: registerFromData.username,
					email: registerFromData.email,
					password: registerFromData.password,
				})
				const dataRegister = await resRegister.data
				localStorage.setItem('userToken', dataRegister.encodedToken)
				if (dataRegister && dataRegister.createdUser) {
					try {
						const resLogin = await axios.post('/api/auth/login', {
							email: dataRegister.createdUser.email,
							password: dataRegister.createdUser.password,
						})
						const dataLogin = await resLogin.data
						localStorage.setItem('userToken', dataLogin.encodedToken)
						setUserAction(dataLogin)
						navigate('/videos')
					} catch (error) {
						setUserError(error.message)
					}
				} else {
					setUserError(
						'Registration Data Invalid or User Already Registered'
					)
				}
			} catch (error) {
				setUserError(error.message)
			}
		}
	}

	const handleChange = event => {
		const { name, value } = event.target
		setRegisterFormData(prevFormData => {
			return {
				...prevFormData,
				[name]: value,
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

	return (
		<>
			<Header />
			<div className='form-wrapper'>
				<form
					className='form form-login fs-400 letter-spacing-3'
					onSubmit={handleLoginSubmit}>
					<label htmlFor='username' className='username'>
						Username<span className='text-red'>*</span>
					</label>
					<input
						id='username'
						className='form-username'
						type='text'
						name='username'
						onChange={handleChange}
						value={registerFromData.username}
						required
					/>

					<label htmlFor='email' className='email'>
						Email<span className='text-red'>*</span>
						<span
							className='form__tooltip'
							data-tooltip='Please enter your email address'></span>
					</label>
					<input
						id='email'
						className='form-email'
						type='email'
						name='email'
						onChange={handleChange}
						value={registerFromData.email}
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
							value={registerFromData.password}
							required
						/>
						<i className='fas fa-eye p-absolute'></i>
					</div>

					<label htmlFor='confirm-password' className='password'>
						Confirm Password<span className='text-red'>*</span>
						<span
							className='form__tooltip'
							data-tooltip='Minimum 8 characters'></span>
					</label>

					<div className='p-relative'>
						<input
							id='confirmPassword'
							className='form-password'
							type='password'
							minLength='8'
							name='confirmPassword'
							onChange={handleChange}
							value={registerFromData.confirmPassword}
							required
						/>
						<i className='fas fa-eye p-absolute'></i>
					</div>
					<p className='fs-300 text-red'>{message}</p>

					<button className='btn btn-signUp uppercase letter-spacing-1'>
						Sign up
					</button>
					<p className='already-done'>
						Alredy Registered?{' '}
						<Link
							to='/login'
							state={{ form: location.pathname }}
							className='link'>
							Login
						</Link>
					</p>
				</form>
			</div>
		</>
	)
}
