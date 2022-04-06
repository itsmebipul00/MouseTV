import './PlayListScreen.css'

import { usePlayList } from '../../ActionProviders/PlayListAction'
import { Outlet, useNavigate } from 'react-router-dom'

export const PlayListScreen = () => {
	const { playList } = usePlayList()

	const navigate = useNavigate()

	console.log(playList)

	const gotoPlaylist = id => {
		navigate(`/playlist/${id}`)
	}

	return (
		<div className='playlistScreen'>
			<div className='playlist-titles'>
				{playList &&
					playList.length > 0 &&
					playList.map(p => (
						<>
							<p onClick={() => gotoPlaylist(p._id)}>{p.title}</p>
						</>
					))}
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}
