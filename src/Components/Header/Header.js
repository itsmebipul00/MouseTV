import {
	GalaMouse,
	FeSearch,
	UiwLogout,
	RiUser3Fill,
} from '../../assets/logos'
import { getUserToken } from '../../utils/getUserToken'
import { useUser } from '../../ActionProviders/AuthActions'
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
	const { logoutUser } = useUser()

	const token = getUserToken()
	return (
		<header className='header d-flex'>
			<div className='d-flex'>
				<Link to='/videos' className='d-inline'>
					<GalaMouse
						width='3rem'
						height='3rem'
						fill='white'
						stroke='white'
					/>
					<h1 className='brand-name letter-spacing-4 d-inline'>tv</h1>
				</Link>
			</div>
			<div className='d-flex header-side'>
				<label
					className='sr-only input-search-label'
					htmlFor='input-search'
				/>

				<div className='p-relative'>
					<input
						id='input-search'
						className='input-search'
						placeholder='Search for videos...'
					/>

					<FeSearch
						className='search-icon'
						stroke='black'
						width='2rem'
						height='1.5rem'
					/>
				</div>

				{!token ? (
					<>
						<Link to='/login' className='login-link'>
							<UiwLogout
								width='2rem'
								height='1.5rem '
								className='login-icon'
							/>
						</Link>
						<Link to='/user' className='user-icon-link'>
							<RiUser3Fill
								className='user-icon'
								width='2rem'
								height='2.5rem'
							/>
						</Link>
					</>
				) : (
					<>
						<button onClick={logoutUser} className='logout-button'>
							<UiwLogout
								className='logout-icon'
								width='2rem'
								height='2rem'
							/>
						</button>
						<Link to='/user' className='user-icon-link'>
							<RiUser3Fill
								className='user-icon'
								width='2rem'
								height='2.5rem'
							/>
						</Link>
					</>
				)}
			</div>
		</header>
	)
}
