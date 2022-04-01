import './Error.css'

export const Error = ({ error }) => {
	return (
		<div className='error-wrapper f-col'>
			<h2 className='text-red'>ERROR:</h2>
			<p className='fs-850'>{error}</p>
		</div>
	)
}
