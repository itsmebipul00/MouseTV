export const NewPlaylistDialog = props => {
	const { setNewPlaylist, newPlaylist, playListHandler, video } =
		props

	return (
		<div className='new-Playlist'>
			<p className='new-playlist-title'>New Playlist</p>
			<label htmlFor='playlist' className='sr-only'>
				{' '}
				Name{' '}
			</label>
			<input
				id='newPlaylist'
				type='text'
				name='newPlaylist'
				className='playlist'
				placeholder='Playlist Name...'
				value={newPlaylist}
				onChange={e => setNewPlaylist(e.target.value)}
			/>
			<button
				onClick={e => playListHandler(e, video)}
				className='btn-create-playlist'>
				Create and Save
			</button>
		</div>
	)
}
