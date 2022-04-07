import './VideoCard.css'
import { VideoCTAs } from '../VideoCTAs/VideoCTAs'

import { Link, useNavigate } from 'react-router-dom'

import { RiDeleteBin7Fill } from '../../assets/logos'

import { usePlayList } from '../../ActionProviders/PlayListAction'

import { useHistroy } from '../../ActionProviders/HistoryActions'

export const VideoCard = props => {
	const {
		_id,
		poster,
		title,
		duration,
		video,
		toogleLikesVideos,
		likes,
		watchLater,
		toggleWatchLater,
		playListTobeShown,
	} = props

	const { deleteFromPlaylist, deletePlaylist } = usePlayList()

	const { addToHistory } = useHistroy()

	// console.log(addtoHistory)

	const likedVideo = likes.find(likedV => likedV._id === _id)
		? true
		: false

	const isWatchLater = watchLater.find(whatchL => whatchL._id === _id)
		? true
		: false

	const navigate = useNavigate()

	const handleDeletePlaylist = () => {
		if (playListTobeShown.videos.length === 1) {
			deletePlaylist(playListTobeShown._id)
			navigate('/playlist')
		} else {
			deleteFromPlaylist(video, playListTobeShown)
		}
	}

	const handlePathtoVideo = video => {
		addToHistory(video)
		setTimeout(() => navigate(`/video/${video._id}`, 500))
	}

	return (
		<div className='video p-relative'>
			<button
				onClick={() => handlePathtoVideo(video)}
				className='video-link'>
				<img src={poster} alt={`${title}`} className='video-poster' />
			</button>
			<div className='video-info'>
				<VideoCTAs
					likedVideo={likedVideo}
					isWatchLater={isWatchLater}
					toogleLikesVideos={toogleLikesVideos}
					video={video}
					toggleWatchLater={toggleWatchLater}
				/>
				<div className='video-sub-info video-title '>
					<p className='video-duration'>
						<span className='text-red'>Duration:</span>{' '}
						<span>{duration}</span>
						<span></span>
					</p>
					<p className='fs-500 text-red'>{title}</p>
				</div>
				<button
					onClick={handleDeletePlaylist}
					className='playlist-delete'>
					<RiDeleteBin7Fill
						width='1.5rem'
						height='1.5rem'
						stroke='white'
						fill='white'
						pathfill='white'
						className='delete-video-playlist'
					/>
				</button>
			</div>
		</div>
	)
}
