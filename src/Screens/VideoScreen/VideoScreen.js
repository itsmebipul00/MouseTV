import axios from 'axios'
import { useEffect, useReducer } from 'react'
import { videoReducer } from '../../reducers/videoReducer.js'
import { Loader } from '../../Components/Loader/Loader.js'
import { Error } from '../../Components/Error/Error.js'
import ReactPlayer from 'react-player'

import { useParams } from 'react-router-dom'
import { Header } from '../../Components/Header/Header.js'
import {
	IcBaselinePlaylistAdd,
	BiHandThumbsUpFill,
	CarbonThumbsDownFilled,
	WatchLaterIcon,
} from '../../assets/logos'

import './VideoScreen.css'

export const VideoScreen = () => {
	const params = useParams()

	const { id } = params

	const iconSize = {
		height: '2rem',
		width: '2rem',
		fill: 'black',
		stroke: 'black',
	}

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

			const res = await axios.get(`/api/video/${params.id}`)

			setTimeout(() => setVideo(res.data.video), 1000)
		} catch (error) {
			dispatchVideo({
				type: 'VIDEO_ERROR',
				payload: error.message,
			})
		}
	}

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
				<div>
					<ReactPlayer
						width='98vw'
						height='98vh'
						url={video.url}
						className='react-player'
						// playing={true}
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
							<span className='videos-sub-info'>
								<IcBaselinePlaylistAdd {...iconSize} />
								<WatchLaterIcon
									{...iconSize}
									fill='white'
									stroke='white'
								/>
								<BiHandThumbsUpFill {...iconSize} />
								<CarbonThumbsDownFilled {...iconSize} />
							</span>
						</span>
						<div className='video-description fs-500 letter-spacing-4'>
							{video.description}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
