import './VideoCard.css'
import { VideoCTAs } from '../VideoCTAs/VideoCTAs'

import { Link } from 'react-router-dom'

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
	} = props

	const likedVideo = likes.find(likedV => likedV._id === _id)
		? true
		: false

	const isWatchLater = watchLater.find(whatchL => whatchL._id === _id)
		? true
		: false

	return (
		<div className='video'>
			<Link to={`/video/${_id}`} className='link'>
				<img src={poster} alt={`${title}`} className='video-poster' />
			</Link>
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
			</div>
		</div>
	)
}
