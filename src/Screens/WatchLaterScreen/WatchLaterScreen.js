import './WatchLaterScreen.css'

import { useWatchLater } from '../../ActionProviders/WatchLaterActions'

import { useLikes } from '../../ActionProviders/LikesAction'

import { VideoCard as Video } from '../../Components/VideoCard/VideoCard'

export const WatchLaterScreen = () => {
	const { toggleWatchLater, watchLater, clearWatchLater } =
		useWatchLater()

	const { likes, toogleLikesVideos } = useLikes()

	console.log(watchLater)
	return (
		<div className='videos-listed'>
			{watchLater &&
				watchLater.length > 0 &&
				watchLater.map(video => (
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
				))}
		</div>
	)
}
