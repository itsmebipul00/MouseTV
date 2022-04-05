export const AllPlayList = props => {
	const { video, id, title, videoToplayListHandler } = props

	// console.log(video, id, title, setShowNewPlayList)

	return (
		<>
			<p
				className='title text-center uppercase'
				onClick={e => videoToplayListHandler(e, id, video)}>
				{title}
			</p>
		</>
	)
}
