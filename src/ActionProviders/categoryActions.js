import { useContext, useReducer } from 'react'
import { CategoryContext } from '../contextCreator'
import { categoriesReducer } from '../reducers/categoriesReducer'
import axios from 'axios'

const CategoryProvider = props => {
	const [
		{
			categories,
			loading: categoriesLoading,
			error: categoriesError,
		},
		dispatch,
	] = useReducer(categoriesReducer, {
		categories: [],
	})

	const successCategories = data =>
		dispatch({
			type: 'CATEGORIES_SUCCESS',
			payload: data,
		})

	const fetchCategories = async () => {
		try {
			dispatch({ type: 'CATEGORIES_LOADING_TRUE' })

			const res = await axios.get('/api/categories')

			setTimeout(() => successCategories(res.data.categories), 1000)
		} catch (err) {
			dispatch({
				type: 'CATEGORIES_ERROR',
				payload: err.message,
			})
		}
	}

	return (
		<CategoryContext.Provider
			value={{
				categories,
				categoriesError,
				categoriesLoading,
				fetchCategories,
			}}>
			{props.children}
		</CategoryContext.Provider>
	)
}

const useCategory = () => useContext(CategoryContext)

export { useCategory, CategoryProvider }
