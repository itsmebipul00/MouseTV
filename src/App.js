import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { CategoryProvider } from './ActionProviders/categoryActions'

function App() {
	console.log(CategoryProvider)
	return (
		<CategoryProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomeScreen />}></Route>
				</Routes>
			</BrowserRouter>
		</CategoryProvider>
	)
}

export default App
