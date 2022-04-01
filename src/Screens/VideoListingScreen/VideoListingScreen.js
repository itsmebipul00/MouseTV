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
	} = useVideos()

	const handleFiltersAction = cat => {
		if (cat === 'all') {
			setFilteredData(videos)
		} else {
			const filteredData = videos.filter(vid => vid.category === cat)
			setFilteredData(filteredData)
		}
	}

	return (
		<div className='videoListingScreen'>
			{videosLoading && categoriesLoading && <Loader />}
			{videosError && <Error error={videosError} />}
			{categoriesError && <Error error={categoriesError} />}

			<Header />

			<div className='categories'>
				{categories &&
					categories.length > 0 &&
					categories.map(cat => (
						<Categories
							category={cat}
							key={cat.id}
							handleFiltersAction={handleFiltersAction}
						/>
					))}
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
