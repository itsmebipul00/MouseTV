import './logo.css'

export const GalaMouse = props => {
	return (
		<svg width='1em' height='1em' viewBox='0 0 256 256' {...props}>
			<g
				fill={props.fill}
				stroke={props.stroke}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='16'>
				<path d='m 63.998705,64.001121 c 0,64.001289 -16.00032,48.000969 -16.00032,96.001929'></path>
				<path d='m 192.00129,64.001121 c 0,-16.000322 0,-22.762857 -16.00032,-32.000645'></path>
				<path d='m 128,48.000796 v 32.00065'></path>
				<path d='m 79.99903,32.000476 c 0,0 32.00064,-16.000321 48.00097,-16.000321 16.00032,0 48.00097,16.000321 48.00097,16.000321'></path>
				<path d='m 192.00129,64.001121 c 0,64.001289 16.00032,48.000969 16.00032,96.001929'></path>
				<path d='m 208.00161,160.00305 a 80.00161,80.00161 0 0 1 -40.00081,69.28343 80.00161,80.00161 0 0 1 -80.001607,0 80.00161,80.00161 0 0 1 -40.000803,-69.28343'></path>
				<path d='m 63.998705,64.001125 c 0,-16.000326 2e-6,-22.762857 16.000325,-32.000649'></path>
			</g>
		</svg>
	)
}

export const FeSearch = props => {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				fillRule='evenodd'
				d='m16.325 14.899l5.38 5.38a1.008 1.008 0 0 1-1.427 1.426l-5.38-5.38a8 8 0 1 1 1.426-1.426ZM10 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z'></path>
		</svg>
	)
}

export function UiwLogout(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 20 20' {...props}>
			<path
				fill='currentColor'
				d='M10.24 0c3.145 0 6.057 1.395 7.988 3.744a.644.644 0 0 1-.103.92a.68.68 0 0 1-.942-.1a8.961 8.961 0 0 0-6.944-3.256c-4.915 0-8.9 3.892-8.9 8.692c0 4.8 3.985 8.692 8.9 8.692a8.962 8.962 0 0 0 7.016-3.343a.68.68 0 0 1 .94-.113a.644.644 0 0 1 .115.918C16.382 18.564 13.431 20 10.24 20C4.583 20 0 15.523 0 10S4.584 0 10.24 0Zm6.858 7.16l2.706 2.707c.262.261.267.68.012.936l-2.644 2.643a.662.662 0 0 1-.936-.01a.662.662 0 0 1-.011-.937l1.547-1.547H7.462a.662.662 0 0 1-.67-.654c0-.362.3-.655.67-.655h10.269l-1.558-1.558a.662.662 0 0 1-.011-.936a.662.662 0 0 1 .936.011Z'></path>
		</svg>
	)
}

export function IcBaselinePlayCircleOutline(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='m10 16.5l6-4.5l-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z'></path>
		</svg>
	)
}

export function IcBaselinePlayCircle(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<title>Play</title>

			<path
				fill='currentColor'
				d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.5 16.5v-9l7 4.5l-7 4.5z'></path>
		</svg>
	)
}

export function IcSharpAddCircle(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<title>Manage Playlist</title>

			<path
				fill='currentColor'
				d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'></path>
		</svg>
	)
}

export function BiHandThumbsUpFill(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 16 16' {...props}>
			<title className='like'>Like</title>
			<path
				fill={props.pathFill}
				d='M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965c.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21c.518.173.994.681 1.2 1.273c.184.532.16 1.162-.234 1.733c.058.119.103.242.138.363c.077.27.113.567.113.856c0 .289-.036.586-.113.856c-.039.135-.09.273-.16.404c.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465c0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615c.849-.232 1.574-.787 2.132-1.41c.56-.627.914-1.28 1.039-1.639c.199-.575.356-1.539.428-2.59z'></path>
		</svg>
	)
}

export function IonIosThumbsDown(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 512 512' {...props}>
			<path
				d='M80.7 123.2c-7.5 6.3-16.7 16.1-16.7 31.4 0 13.7 5.7 22.8 10.9 29.1.6 1.2 1.1 2.3 1.6 3.4l.2 1.1c.7 3.5 0 7.1-2 10-3.4 5-5.8 12.3-5.8 25.7 0 11.6 4.8 18.4 9.7 23.2 4.4 4.3 6.1 12.5 4.1 18.3-4.8 13.9-.2 28.4 8.2 37.8 10.5 11.8 20.3 13.2 46.4 11.7 18-1.1 55.5-6.9 80.2-10.8 10.1-1.6 18.9-3 21.6-3.2 12.7-1.3 15.2 0 16.4 4.9.5 2.1-1.9 6.9-4.9 13-4 8.1-9.5 19.2-14.5 35.8-10.1 33.2-9 69.2 2.7 90.2 5.5 9.9 14.8 19.1 26.3 19.1s23.3-2.4 27.9-7.9c3.4-4 2.3-11.6 6.2-26.8 3.1-12.4 7-30.9 12-42 7.5-16.6 39.7-45.1 57-60.4 4.1-3.6 7.6-6.7 10.1-9.1 8.7-8.1 17.6-21.1 25.5-32.7 5.4-7.8 10.4-15.2 13.7-18.5 7.1-7.1 16.6-10.9 22.3-10.9 4.4 0 8-3.6 8-8V88.1c0-4.6-3.7-8.3-8.3-8.3C404 79.8 389 74 373.1 68c-12.2-4.7-24.9-9.5-46.4-12.1-32.4-4-74.2-8.1-112.6-8.1-20.4 0-39.9 2-56.6 3.9-31 3.6-64.2 10.8-75.2 37-4.1 9.7-2.2 17.6.5 23.7.4.8.7 1.7.8 2.6.6 3.3-.6 6.3-2.9 8.2z'
				fill='currentColor'></path>
			<title>Unlike</title>
		</svg>
	)
}

export function CarbonThumbsDownFilled(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 32 32' {...props}>
			<path
				fill='currentColor'
				d='M2 2h5v14H2zm21 0H9v14.803l3.042 4.563l.845 5.917A2.01 2.01 0 0 0 14.867 29H15a3.003 3.003 0 0 0 3-3v-6h8a4.005 4.005 0 0 0 4-4V9a7.008 7.008 0 0 0-7-7z'></path>
			<title>Unlike</title>
		</svg>
	)
}

export function IcBaselinePlaylistAddCheckCircle(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<title>Add to Playlist</title>

			<path
				fill='currentColor'
				d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM7 7h7v2H7V7zm0 3h7v2H7v-2zm3 5H7v-2h3v2zm4.05 3.36l-2.83-2.83l1.41-1.41l1.41 1.41L17.59 12L19 13.41l-4.95 4.95z'></path>
		</svg>
	)
}

export function WatchLaterIcon(props) {
	return (
		<svg
			id='Layer_1'
			data-name='Layer 1'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 94.76 122.88'
			{...props}>
			<title>watch-later</title>
			<path
				fill={props.pathFill}
				className='cls-1'
				d='M88,67.63c9-5.85,9-12.36,0-17.53L14.83,2.19C7.5-2.42-.19.3,0,9.92l.3,94c.63,10.45,6.59,13.3,15.37,8.47l5.78-3.57a35.59,35.59,0,0,0,2.94,3.32A36.8,36.8,0,0,0,83.65,70.31L88,67.63ZM44.31,84.7a6.54,6.54,0,0,1,.82-.76,5.7,5.7,0,0,1,.65-.44V67.82a3.53,3.53,0,0,1,1-2.5h0a3.55,3.55,0,0,1,6,2.5V83.49a7,7,0,0,1,1.28,1h0a6.61,6.61,0,0,1,1,1.29h9.45a3.51,3.51,0,0,1,2.5,1h0a3.55,3.55,0,0,1,0,5h0a3.52,3.52,0,0,1-2.5,1H55.17a6.86,6.86,0,0,1-2.34,2.33,6.83,6.83,0,0,1-10.33-6,6.86,6.86,0,0,1,1.81-4.55ZM72.25,64.81C57,49.57,31.29,53.88,22.38,73.08a30.88,30.88,0,1,0,55.82-.51,28.53,28.53,0,0,0-6-7.76Z'
			/>
		</svg>
	)
}

export function IcBaselinePlaylistAdd(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<title>Add to Playlist</title>

			<path
				fill='currentColor'
				d='M14 10H3v2h11v-2zm0-4H3v2h11V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM3 16h7v-2H3v2z'></path>
		</svg>
	)
}

export function RiUser3Fill(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12a6 6 0 0 1 0 12z'></path>
		</svg>
	)
}

export function IcTwotoneArrowCircleLeft(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8m-8 1h4v-2h-4V8l-4 4l4 4v-3z'
				opacity='.3'></path>
			<path
				fill='currentColor'
				d='M20 12c0 4.41-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8m2 0c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10zm-10 1h4v-2h-4V8l-4 4l4 4v-3z'></path>
		</svg>
	)
}

export function IcTwotoneArrowCircleRight(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8m8-1H8v2h4v3l4-4l-4-4v3z'
				opacity='.3'></path>
			<path
				fill='currentColor'
				d='M4 12c0-4.41 3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8m-2 0c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12zm10-1H8v2h4v3l4-4l-4-4v3z'></path>
		</svg>
	)
}

export function PhUserRectangleBold(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 256 256' {...props}>
			<path
				fill='currentColor'
				d='M216 36H40a20.1 20.1 0 0 0-20 20v144a20.1 20.1 0 0 0 20 20h176a20.1 20.1 0 0 0 20-20V56a20.1 20.1 0 0 0-20-20Zm-116 92a28 28 0 1 1 28 28a28.1 28.1 0 0 1-28-28Zm28 52a60.1 60.1 0 0 1 40.9 16H87.1a60.1 60.1 0 0 1 40.9-16Zm84 16h-12.4a83.9 83.9 0 0 0-34.6-31.5a52 52 0 1 0-74 0A83.9 83.9 0 0 0 56.4 196H44V60h168Z'></path>
		</svg>
	)
}

export function IcBaselineHistory(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54l.72-1.21l-3.5-2.08V8H12z'></path>
		</svg>
	)
}

export function IcBaselineWatchLater(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7l-.8 1.3z'></path>
		</svg>
	)
}

export function RiDeleteBin7Fill(props) {
	return (
		<svg width='1em' height='1em' viewBox='0 0 24 24' {...props}>
			<path
				fill={props.pathfill}
				d='M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z'></path>
		</svg>
	)
}
