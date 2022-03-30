import './HomeScreen.css'

import { Header } from '../../Components/Header/Header'
import { Footer } from '../../Components/Footer/Footer'
import { IcBaselinePlayCircleOutline } from '../../assets/logos'

import { useCategory } from '../../ActionProviders/categoryActions'
import { useEffect } from 'react'

import { Loader } from '../../Components/Loader/Loader'
import { Error } from '../../Components/Error/Error'

import '../../assets/logo.css'

const HomeScreen = () => {
	const {
		categories,
		categoriesLoading,
		categoriesError,
		fetchCategories,
	} = useCategory()

	console.log(categories, categoriesLoading, categoriesError)

	useEffect(() => {
		fetchCategories()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
				<h2 className='categories-heading uppercase fs-850 text-red letter-spacing-4'>
					Categories
				</h2>
				<div className='categories'>
					{categories &&
						categories.length > 0 &&
						categories.map(cat => (
							<div
								className='category-wrapper uppercase'
								key={cat.id}
								id={cat._id}>
								<div className={`category ${cat.categoryName}`}></div>
								<h3 className='fs-850 letter-spacing-2'>
									{cat.categoryName}
								</h3>
							</div>
						))}
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default HomeScreen
