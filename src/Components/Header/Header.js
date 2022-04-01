import { GalaMouse, FeSearch, UiwLogout } from '../../assets/logos'
import './Header.css'

export const Header = () => {
	return (
		<header className='header d-flex'>
			<div className='d-flex'>
				<GalaMouse
					width='3rem'
					height='3rem'
					fill='white'
					stroke='white'
				/>
				<h1 className='brand-name letter-spacing-4 d-inline'>tv</h1>
			</div>
			<div className='d-flex header-side'>
				<label
					className='sr-only input-search-label'
					htmlFor='input-search'
				/>

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

				<div className='logout-wrapper'>
					<UiwLogout
						className='login-icon'
						width='2rem'
						height='1.5rem'
					/>
				</div>
			</div>
		</header>
	)
}
