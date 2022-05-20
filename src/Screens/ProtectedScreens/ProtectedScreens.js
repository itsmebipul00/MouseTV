import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'

import './ProtectedScreens.css'

import {
	IcSharpAddCircle,
	PhUserRectangleBold,
	IcBaselineHistory,
	IcBaselineWatchLater,
} from '../../assets/logos'
import { Fragment } from 'react'

export const ProtectedScreens = () => {
	return (
		<div className='protected'>
			{localStorage.getItem('userToken') ? (
				<Fragment>
					<Header />

					<div className='protected-links-wrapper'>
						<section className='protected-links fs-600'>
							<NavLink to='/watchlater'>
								<span className='text'>WatchLater</span>

								<IcBaselineWatchLater />
							</NavLink>
							<NavLink to='/playlist'>
								<span className='text'>PlayLists</span>

								<IcSharpAddCircle />
							</NavLink>
							<NavLink to='/user'>
								<span className='text'>UserProfile</span>

								<PhUserRectangleBold />
							</NavLink>
							<NavLink to='/history'>
								<span className='text'>History</span>

								<IcBaselineHistory />
							</NavLink>
						</section>
						<section className='outlet-screens'>
							<Outlet />
						</section>
					</div>
				</Fragment>
			) : (
				<Navigate to='/login' replace />
			)}
		</div>
	)
}
