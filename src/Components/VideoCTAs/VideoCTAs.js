import './VideoCTAs.css'

import {
	IcBaselinePlaylistAdd,
	BiHandThumbsUpFill,
	WatchLaterIcon,
} from '../../assets/logos'

import { useState } from 'react'

import { ManagePlaylistDialog } from './ManagePlaylistDialog'

import { NewPlaylistDialog } from './NewPlayListDialog'

import { AllPlayList } from './AllPlayListDialog'

import { usePlayList } from '../../ActionProviders/PlayListAction'

export const VideoCTAs = ({
	video,
	toogleLikesVideos,
	likedVideo,
	toggleWatchLater,
	isWatchLater,
}) => {
	const iconSize = {
		height: '1.5rem',
		width: '1.5rem',
		fill: 'white',
		stroke: 'black',
	}

	const watchLaterIcon = {
		height: '1.5rem',
		width: '1.5rem',
		fill: 'black',
		stroke: 'black',
	}

	const listStyles = {
		height: '1.5rem',
		width: '1.5rem',
		pathFill: 'hsl(198, 74%, 47%)',
	}

	const [showDialog, setShowDialog] = useState(false)

	const [newPlaylist, setNewPlaylist] = useState('')

	const { createPlaylist, playList, addVideoToPlaylist } =
		usePlayList()

	// console.log(playList)

	const playListHandler = (e, video) => {
		console.log(video)

		e.preventDefault()

		createPlaylist(newPlaylist, video)

		setShowDialog(false)
	}

	const videoToplayListHandler = (e, id, video) => {
		e.preventDefault()

		addVideoToPlaylist(id, video)

		setShowDialog(false)
	}

	return (
		<div className='video-cta-icons'>
			<button
				onClick={() => setShowDialog(true)}
				className='handle-playlist'>
				<IcBaselinePlaylistAdd {...iconSize} />
			</button>

			<ManagePlaylistDialog
				showDialog={showDialog}
				onClose={() => setShowDialog(false)}>
				{playList && playList.length > 0 ? (
					<div>
						<p className='save-to fs-500'>Save to..</p>
						{playList.map(pL => (
							<div key={pL._id}>
								<AllPlayList
									video={video}
									id={pL._id}
									title={pL.title}
									videoToplayListHandler={videoToplayListHandler}
								/>
							</div>
						))}
						<NewPlaylistDialog
							setNewPlaylist={setNewPlaylist}
							newPlaylist={newPlaylist}
							playListHandler={playListHandler}
							video={video}
						/>
					</div>
				) : (
					<NewPlaylistDialog
						setNewPlaylist={setNewPlaylist}
						newPlaylist={newPlaylist}
						playListHandler={playListHandler}
						video={video}
					/>
				)}
			</ManagePlaylistDialog>

			<button
				onClick={() => toggleWatchLater(video)}
				className='toggle-watchlist-btn'>
				{isWatchLater ? (
					<WatchLaterIcon {...listStyles} />
				) : (
					<WatchLaterIcon {...watchLaterIcon} />
				)}
			</button>
			<button
				onClick={() => toogleLikesVideos(video)}
				className='toggle-like-btn'>
				{likedVideo ? (
					<BiHandThumbsUpFill {...listStyles} />
				) : (
					<BiHandThumbsUpFill {...iconSize} />
				)}
			</button>
		</div>
	)
}
