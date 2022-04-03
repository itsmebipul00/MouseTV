import { useState } from 'react'

import { useVideos } from '../../ActionProviders/VideoActions'

import './VideoCTAs.css'

import {
	IcBaselinePlaylistAdd,
	BiHandThumbsUpFill,
	WatchLaterIcon,
} from '../../assets/logos'

export const VideoCTAs = ({
	video,
	toogleLikesVideos,
	likedVideo,
	toggleWatchLater,
	watchLater,
	isWatchLater,
}) => {
	console.log(video)

	const iconSize = {
		height: '1.5rem',
		width: '1.5rem',
		fill: 'white',
		stroke: 'black',
	}

	const watchLaterIcon = {
		height: '1.5rem',
		width: '1.5rem',
		fill: 'black',
		stroke: 'black',
	}

	const listStyles = {
		height: '1.5rem',
		width: '1.5rem',
		pathFill: 'hsl(198, 74%, 47%)',
	}

	// const [showModal, setShowModal] = useState(false)

	// const managePlaylist = () => {}

	// const dialogModal = {
	// 	return(

	// 	)
	// }

	return (
		<div className='video-cta-icons'>
			<button className='handle-playlist' onClick={(e) => }>
				<IcBaselinePlaylistAdd {...iconSize} />
			</button>
			<button
				onClick={() => toggleWatchLater(video)}
				className='toggle-watchlist-btn'>
				{isWatchLater ? (
					<WatchLaterIcon {...listStyles} />
				) : (
					<WatchLaterIcon {...watchLaterIcon} />
				)}
			</button>
			<button
				onClick={() => toogleLikesVideos(video)}
				className='toggle-like-btn'>
				{likedVideo ? (
					<BiHandThumbsUpFill {...listStyles} />
				) : (
					<BiHandThumbsUpFill {...iconSize} />
				)}
			</button>
		</div>
	)
}
