import './DialogBox.css'

export const DialogBox = () => {
	const createNewPlaylist = e => {
		console.log(e)
	}

	return (
		<section className='dialog-box'>
			<h3 className='dialog-title'> Dialog Title</h3>
			<div className='dialog-body'>Dialog Body</div>
			<button className='' onClick={e => createNewPlaylist(e)}>
				Create New Playlist
			</button>
		</section>
	)
}
