export const ManagePlaylistDialog = props => {
	// console.log(props)
	// DialogBox will return nothing WHEN !props.showDialog is true I.E WHEN the show value is false
	if (!props.showDialog) {
		return null
	}
	return (
		<section className='dialog-box-wrapper' onClick={props.onClose}>
			<div className='dialog-box' onClick={e => e.stopPropagation()}>
				{props.children}
			</div>
		</section>
	)
}
