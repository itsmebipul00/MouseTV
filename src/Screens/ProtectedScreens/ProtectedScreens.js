import {
	NavLink,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom'
import { Header } from '../../Components/Header/Header'

import './ProtectedScreens.css'

import {
	WatchLaterIcon,
	IcSharpAddCircle,
	PhUserRectangleBold,
	IcBaselineHistory,
	IcBaselineWatchLater,
} from '../../assets/logos'

export const ProtectedScreens = () => {
	// const { pathname } = useLocation()

	// const navigate = useNavigate()

	return (
		<div className='protected'>
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
		</div>
	)
}
