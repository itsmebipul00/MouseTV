import {
	IcBaselinePlaylistAdd,
	BiHandThumbsUpFill,
	WatchLaterIcon,
} from '../../assets/logos'

export const VideoCTAs = ({
	video,
	toogleLikesVideos,
	likedVideo,
}) => {
	const iconSize = {
		height: '1.5rem',
		width: '1.5rem',
		fill: 'white',
		stroke: 'black',
	}

	const likedStyles = {
		height: '1.5rem',
		width: '1.5rem',
		pathFill: 'hsl(198, 74%, 47%)',
	}

	return (
		<div className='video-cta-icons'>
			<IcBaselinePlaylistAdd {...iconSize} />
			<WatchLaterIcon {...iconSize} />
			<button
				onClick={() => toogleLikesVideos(video)}
				className='toggle-like-btn'>
				{likedVideo ? (
					<BiHandThumbsUpFill {...likedStyles} />
				) : (
					<BiHandThumbsUpFill {...iconSize} />
				)}
			</button>
		</div>
	)
}
