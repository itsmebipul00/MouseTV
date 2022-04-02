import { useEffect, useRef } from 'react'

import {
	IcTwotoneArrowCircleLeft,
	IcTwotoneArrowCircleRight,
} from '../../assets/logos.js'

import { useVideos } from '../../ActionProviders/VideoActions'

import { Header } from '../../Components/Header/Header'
import { VideoCard as Video } from '../../Components/VideoCard/VideoCard'

import { Categories } from '../../Components/Categories/Categories'

import { Loader } from '../../Components/Loader/Loader'

import { Error } from '../../Components/Error/Error'

import './VideoListingScreen.css'

export const VideoListingScreen = () => {
	const {
		categories,
		filteredVideos,
		videos,
		setFilteredData,
		categoriesLoading,
		categoriesError,
		videosLoading,
		videosError,
		fetchVideos,
		fetchCategories,
	} = useVideos()

	const handleFiltersAction = cat => {
		if (cat === 'all') {
			setFilteredData(videos)
		} else {
			const filteredData = videos.filter(vid => vid.category === cat)
			setFilteredData(filteredData)
		}
	}

	const sliderBtn = useRef(null)

	const scroll = scrollOffset => {
		sliderBtn.current.scrollLeft += scrollOffset
	}

	useEffect(() => {
		fetchVideos()
		fetchCategories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='videoListingScreen'>
			{videosLoading && categoriesLoading && <Loader />}
			{videosError && <Error error={videosError} />}
			{categoriesError && <Error error={categoriesError} />}

			<Header />

			<div className='categories' ref={sliderBtn}>
				<button
					onClick={() => scroll(-700)}
					className='scroll-btn left-scroll-btn'>
					<IcTwotoneArrowCircleLeft
						className='left-scroll-icon'
						width='4rem'
						height='4rem'
					/>
				</button>

				{categories &&
					categories.length > 0 &&
					categories.map(cat => (
						<Categories
							category={cat}
							key={cat.id}
							handleFiltersAction={handleFiltersAction}
						/>
					))}

				<button
					onClick={() => scroll(+700)}
					className='scroll-btn right-scroll-btn'>
					<IcTwotoneArrowCircleRight
						className='right-scroll-icon'
						width='4rem'
						height='4rem'
					/>
				</button>
			</div>

			<div className='videos-listed'>
				{filteredVideos &&
					filteredVideos.length > 0 &&
					filteredVideos.map(video => (
						<Video video={video} key={video.id} />
					))}
			</div>
		</div>
	)
}
