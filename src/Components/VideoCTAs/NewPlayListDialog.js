export const NewPlaylistDialog = props => {
	const { setNewPlaylist, newPlaylist, playListHandler, video } =
		props

	return (
		<form
			className='new-Playlist'
			onSubmit={e => playListHandler(e, video)}>
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
			<button className='btn-create-playlist'>Create and Save</button>
		</form>
	)
}
