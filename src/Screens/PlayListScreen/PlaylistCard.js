import { usePlayList } from '../../ActionProviders/PlayListAction'

import { useWatchLater } from '../../ActionProviders/WatchLaterActions'

import { useLikes } from '../../ActionProviders/LikesAction'

import { VideoCard as Video } from '../../Components/VideoCard/VideoCard'

import { useNavigate, useParams } from 'react-router-dom'

import './PlayListScreen.css'

import { RiDeleteBin7Fill } from '../../assets/logos'

import { useEffect } from 'react'

export const Playlist = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const { playList, deletePlaylist } = usePlayList()

	const { watchLater, toggleWatchLater } = useWatchLater()

	const { likes, toogleLikesVideos } = useLikes()

	const playListTobeShown = playList.find(pL => pL._id === id)

	const { videos } = playListTobeShown

	const handleDeletePlaylsit = () => {
		deletePlaylist(playListTobeShown._id)
		navigate('/playlist')
	}

	return (
		<div>
			<button
				onClick={handleDeletePlaylsit}
				className='playlist-delete'>
				<RiDeleteBin7Fill
					width='1.5rem'
					height='1.5rem'
					stroke='white'
					fill='black'
					pathfill='black'
					className='delete-playlist'
				/>
				<span className='playlist-text'>PLAYLIST</span>
			</button>
			<div className='videos-listed playlist-videos'>
				{id &&
					playListTobeShown &&
					videos &&
					videos.length > 0 &&
					videos.map(video => (
						<>
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
								playListTobeShown={playListTobeShown}
							/>
						</>
					))}
			</div>
		</div>
	)
}
