import './VideoCard.css'
import {
	IcBaselinePlayCircle,
	IcSharpAddCircle,
	BiHandThumbsUpFill,
	CarbonThumbsDownFilled,
} from '../../assets/logos'

export const VideoCard = props => {
	const iconSize = {
		height: '1.5rem',
		width: '1.5rem',
		fill: 'black',
		stroke: 'black',
	}
	const { video } = props
	return (
		<div className='video'>
			<img
				src={video.poster}
				alt={`${video.poster}`}
				className='video-poster'
			/>
			<div className='video-info'>
				<div className='video-cta-icons'>
					<IcBaselinePlayCircle {...iconSize} />
					<IcSharpAddCircle {...iconSize} />
					<BiHandThumbsUpFill {...iconSize} />
					<CarbonThumbsDownFilled {...iconSize} />
				</div>
				<div className='video-sub-info video-title '>
					<p className='video-duration'>
						<span className='text-red'>Duration:</span>{' '}
						{video.duration}
					</p>
					<p className='fs-500 text-red'>{video.title}</p>
				</div>
			</div>
		</div>
	)
}
