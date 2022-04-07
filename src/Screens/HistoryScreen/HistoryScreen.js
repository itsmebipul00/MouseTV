import { useHistroy } from '../../ActionProviders/HistoryActions'
import { useLikes } from '../../ActionProviders/LikesAction'
import { useWatchLater } from '../../ActionProviders/WatchLaterActions'

import { VideoCard as Video } from '../../Components/VideoCard/VideoCard'

import { RiDeleteBin7Fill } from '../../assets/logos'
import { useNavigate } from 'react-router-dom'

import './HistoryScreen.css'

export const HistoryScreen = () => {
	const { toggleWatchLater, watchLater } = useWatchLater()

	const { toogleLikesVideos, likes } = useLikes()

	const navigate = useNavigate()

	const { clearHistory, removeFromHistory, history } = useHistroy()

	const handleDeleteHistory = async id => {
		if (history.length === 1) {
			removeFromHistory(id)
			setTimeout(() => navigate('/videos'), 500)
		} else {
			removeFromHistory(id)
		}
	}

	return (
		<div className='history-screen p-relative'>
			<button
				onClick={() => clearHistory()}
				className='history-delete-all-btn'>
				<RiDeleteBin7Fill
					width='1.5rem'
					height='1.5rem'
					stroke='white'
					fill='black'
					pathfill='black'
					className='history-delete-all'
				/>
				<span className='playlist-text'>CLEAR ALL</span>
			</button>
			<div className='videos-listed'>
				{history &&
					history.length > 0 &&
					history.map(video => (
						<div className='p-relative'>
							<Video
								_id={video._id}
								poster={video.poster}
								title={video.title}
								video={video}
								duration={video.duration}
								key={video.id}
								toogleLikesVideos={toogleLikesVideos}
								likes={likes}
								toggleWatchLater={toggleWatchLater}
								watchLater={watchLater}
							/>
							<button
								onClick={() => handleDeleteHistory(video._id)}
								className='history-delete-btn'>
								<RiDeleteBin7Fill
									width='1.5rem'
									height='1.5rem'
									stroke='white'
									fill='white'
									pathfill='white'
									className='history-delete'
								/>
							</button>
						</div>
					))}
			</div>
		</div>
	)
}
