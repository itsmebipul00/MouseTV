import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { videoReducer } from '../../reducers/videoReducer.js'
import { Loader } from '../../Components/Loader/Loader.js'
import { Error } from '../../Components/Error/Error.js'
import ReactPlayer from 'react-player'

import { useLikes } from '../../ActionProviders/LikesAction.js'

import { useWatchLater } from '../../ActionProviders/WatchLaterActions.js'

import { useParams } from 'react-router-dom'
import { Header } from '../../Components/Header/Header.js'

import { VideoCTAs } from '../../Components/VideoCTAs/VideoCTAs.js'

import './VideoScreen.css'

export const VideoScreen = () => {
	const { id } = useParams()

	const [
		{ video, loading: videoLoading, error: videoError },
		dispatchVideo,
	] = useReducer(videoReducer, {
		video: {},
	})

	const setVideo = data =>
		dispatchVideo({ type: 'VIDEO_SUCCESS', payload: data })

	const fetchVideo = async () => {
		try {
			dispatchVideo({ type: 'GET_VIDEO_REQUEST' })

			const res = await axios.get(`/api/video/${id}`)

			setTimeout(() => setVideo(res.data.video), 1000)
		} catch (error) {
			dispatchVideo({
				type: 'VIDEO_ERROR',
				payload: error.message,
			})
		}
	}

	const { likes, toogleLikesVideos } = useLikes()

	const { watchLater, toggleWatchLater } = useWatchLater()

	const likedVideo = likes.find(likedV => likedV._id === id)
		? true
		: false

	const isWatchLater = watchLater.find(whatchL => whatchL._id === id)
		? true
		: false

	useEffect(() => {
		fetchVideo(id)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	return (
		<div className='videoScreen'>
			{videoLoading && <Loader />}
			{videoError && <Error error={videoError} />}
			<Header />
			{video && video.url && (
				<section>
					<ReactPlayer
						width='98vw'
						height='98vh'
						url={video.url}
						className='react-player'
						controls
					/>
					<div className='video-details'>
						<h2 className='video-title letter-spacing-4 uppercase fs-700'>
							{video.title}
						</h2>
						<span className='videos-sub-deatils'>
							<span className='videos-sub-info fs-600 letter-spacing-4'>
								<p className='video-views'>{video.views}+</p>
								<p className='video-uploaded'>{video.uploaded}</p>
								<p className='category uppercase'>{video.category}</p>
							</span>
							<VideoCTAs
								toogleLikesVideos={toogleLikesVideos}
								likedVideo={likedVideo}
								video={video}
								watchLater={watchLater}
								toggleWatchLater={toggleWatchLater}
								isWatchLater={isWatchLater}
							/>
						</span>
						<p className='video-description fs-500 letter-spacing-4'>
							{video.description}
						</p>
					</div>
				</section>
			)}
		</div>
	)
}
