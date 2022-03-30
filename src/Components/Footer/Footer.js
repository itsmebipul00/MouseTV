import { GalaMouse } from '../../assets/logos'

const Footer = () => {
	return (
		<footer className='mousetv-footer'>
			<div className='footer-logo'>
				<GalaMouse
					width='10rem'
					height='10rem'
					fill='white'
					stroke='white'
				/>
				<span className='fs-850'>tv</span>
			</div>
			<div className='footer-copyright text-center fs-600 letter-spacing-4'>
				&copy; mouseTV 2022
			</div>
		</footer>
	)
}

export default Footer
