export const AllPlayList = props => {
	const { video, id, title, videoToplayListHandler } = props

	return (
		<p
			className='title text-center uppercase'
			onClick={e => videoToplayListHandler(e, id, video)}>
			{title}
		</p>
	)
}
