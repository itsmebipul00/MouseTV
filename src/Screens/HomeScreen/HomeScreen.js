import './HomeScreen.css'

import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { IcBaselinePlayCircleOutline } from '../../assets/logos'

import { Loader } from '../../Components/Loader/Loader'
import { Error } from '../../Components/Error/Error'

import '../../assets/logo.css'
import { Categories } from '../../Components/Categories/Categories'
import { useVideos } from '../../ActionProviders/VideoActions'

import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
	const navigate = useNavigate()

	const {
		categories,
		categoriesLoading,
		categoriesError,
		videos,
		setFilteredData,
	} = useVideos()

	const handleFiltersAction = cat => {
		if (cat === 'all') {
			setFilteredData(videos)
		} else {
			const filteredData = videos.filter(vid => vid.category === cat)
			setFilteredData(filteredData)
		}
		navigate('/videos')
	}

	return (
		<div className='homepage'>
			{categoriesLoading && <Loader />}
			{categoriesError && <Error error={categoriesError} />}
			<div className='header-wrapper-homepage d-grid grid-stacked'>
				<Header />
				<video autoPlay loop muted className='banner-video'>
					<source src='assets/banner-video.mp4' type='video/mp4' />
				</video>
				<button className='btn btn-banner letter-spacing-4 d-flex'>
					<IcBaselinePlayCircleOutline height='2rem' width='2rem' />
					<span className='play-now fs-500'>Play Now</span>
				</button>
			</div>
			<section className='section-categories'>
				<h2 className='categories-heading uppercase fs-700 text-red '>
					Categories
				</h2>
				<div className='categories'>
					{categories &&
						categories.length > 0 &&
						categories.map(cat => (
							<Categories
								key={cat.id}
								category={cat}
								handleFiltersAction={handleFiltersAction}
							/>
						))}
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default HomeScreen
