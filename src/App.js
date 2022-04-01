import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { VideoListingScreen } from './Screens/VideoListingScreen/VideoListingScreen'
import { VideosProvider } from './ActionProviders/VideoActions'

function App() {
	return (
		<VideosProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeScreen />}></Route>
					<Route
						path='/videos'
						element={<VideoListingScreen />}></Route>
				</Routes>
			</BrowserRouter>
		</VideosProvider>
	)
}

export default App
