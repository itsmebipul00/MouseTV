import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { VideoListingScreen } from './Screens/VideoListingScreen/VideoListingScreen'
import { VideosProvider } from './ActionProviders/VideoActions'
import { VideoScreen } from './Screens/VideoScreen/VideoScreen'
import { UserProvider } from './ActionProviders/AuthActions'
import { RegisterScreen } from './Screens/RegisterScreen/RegisterScreen'
import { LikesProvider } from './ActionProviders/LikesAction'
import LoginScreen from './Screens/LoginScreen/LoginScreen'

function App() {
	return (
		<UserProvider>
			<VideosProvider>
				<LikesProvider>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<HomeScreen />} />
							<Route
								path='/videos'
								element={<VideoListingScreen />}
							/>
							<Route path='/video/:id' element={<VideoScreen />} />
							<Route path='/register' element={<RegisterScreen />} />
							<Route path='/login' element={<LoginScreen />} />
						</Routes>
					</BrowserRouter>
				</LikesProvider>
			</VideosProvider>
		</UserProvider>
	)
}

export default App
